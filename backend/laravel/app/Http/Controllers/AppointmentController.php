<?php

namespace App\Http\Controllers;

use App\Models\appointment;
use App\Http\Requests\StoreappointmentRequest;
use App\Http\Requests\UpdateappointmentRequest;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $appointments = Appointment::all();
        return response()->json($appointments);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'doctor' => 'required|string|max:255',
            'age' => 'required|integer',
            'date' => 'required|date',
            'problem' => 'required|string',
        ]);
        

        // Store data into the appointments table
        Appointment::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'doctor' => $request->doctor,
            'age' => $request->age,
            'date' => $request->date,
            'problem' => $request->problem,
        ]);

        return response()->json(['message' => 'Appointment successfully saved!'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(appointment $appointment)
    {
        $appointments = Appointment::all();
        return response()->json($appointments);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateappointmentRequest $request, appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();
        return response()->json(['message' => 'Appointment deleted successfully!']);
    }
}
