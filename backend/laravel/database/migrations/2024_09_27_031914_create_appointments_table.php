<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // VARCHAR 255 for name
            $table->string('email'); // VARCHAR 255 for email
            $table->string('phone'); // VARCHAR 255 for phone
            $table->string('doctor'); // VARCHAR 255 for doctor name
            $table->integer('age'); // Integer for age
            $table->date('date'); // Date field
            $table->text('problem'); // Text field for problem description
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
