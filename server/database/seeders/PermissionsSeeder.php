<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = ["admin", "manager", "contributer"];
        $models = [
            "users", "categories", "tags", "posts", "images"
        ];
        $actions = ["create", "view", "update", "delete"];

        $permissions = [];

        for ($i = 0; $i < count($models); $i++) {
            for ($j = 0; $j < count($actions); $j++){
                array_push($permissions, $actions[$j] . " " . $models[$i]);
            }
        }

        foreach ($permissions as $perm) {
            Permission::create(["name" => $perm]);
        }

        foreach ($roles as $role) {
            $role = Role::create(["name" => $role]);
            $role->givePermissionTo(Permission::all());
        }
    }
}
