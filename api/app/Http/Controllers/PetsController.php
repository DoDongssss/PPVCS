<?php

namespace App\Http\Controllers;

use App\Models\Pets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PetsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();

        $pets = Pets::where('user_id', $user_id)->latest('updated_at')->get();

        return $pets;
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
            'user_id' => ['required', 'integer'],
            'picture_path' => ['nullable', 'string'],
            'name' => ['required', 'string'],
            'gender' => ['required', 'string'],
            'species' => ['nullable', 'string'],
            'breed' => ['nullable', 'string'],
            'color' => ['required', 'string'],
            'birthdate' => ['required', 'string'],
            'weight' => ['required', 'integer']
        ]);

        $pets = Pets::create($request->all());

        return response()->json([
            'message' => 'success',
            'data' => $pets
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pets $pets)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pets $pets)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pets $pets, $id)
    {
        $request->validate([
            'user_id' => ['required', 'integer'],
            'picture_path' => ['nullable', 'string'],
            'name' => ['required', 'string'],
            'gender' => ['required', 'string'],
            'species' => ['nullable', 'string'],
            'breed' => ['nullable', 'string'],
            'color' => ['required', 'string'],
            'birthdate' => ['required', 'string'],
            'weight' => ['required', 'integer']
        ]);

        $pets = Pets::findOrFail($id);
        $pets->update($request->all());

        return response()->json([
            'message' => 'success',
            'data' => $pets
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pets $pets, $id)
    {
        $pets = Pets::findOrFail($id);

        $pets->delete();

        return response()->json([
            'message' => 'Successfully Deleted',
        ], 200);
    }
}
