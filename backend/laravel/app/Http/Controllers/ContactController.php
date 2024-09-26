<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\contact;

use App\Http\Requests\StorecontactRequest;
use App\Http\Requests\UpdatecontactRequest;

class ContactController extends Controller




{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::all();

        return response()->json([
        'results' => $contacts
        ],200);
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
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:contacts',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        // Store data into the contacts table
        Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        return response()->json(['message' => 'Contact successfully saved!'], 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(contact $contact)
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatecontactRequest $request, contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();
        return response()->json(['message' => 'Contact deleted successfully!']);
    }
    
}
