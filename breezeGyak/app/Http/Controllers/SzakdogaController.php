<?php

namespace App\Http\Controllers;

use App\Models\Szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{
    public function index()
    {
        $dogak = response()->json(Szakdoga::all());
        return $dogak;
    }

    public function show($id)
    {
        $doga = response()->json(Szakdoga::find($id));
        return $doga;
    }

    public function store(Request $request)
    {
        (new Szakdoga())->fill($request->all())->save();
        return $this->index();
    }

    public function update(Request $request, $id)
    {
        Szakdoga::findorFail($id)->update($request->all());
        return $this->index();

    }
    public function destroy($id)
    {
        //find helyett a paraméter
        Szakdoga::findOrFail($id)->delete();
        return $this->index();
    }
}
