<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @SWG\Definition(
 * definition="Garage",
 * required={"name", "customer_level"},
 * @SWG\Property(
 * property="name",
 * type="string",
 * description="Jhonny Garge",
 * example="Exhaust"
 * ),
 * @SWG\Property(
 * property="customer_level",
 * type="integer",
 * description="Whats the garage level",
 * example="10"
 * )
 * )
 */


class Garage extends Model
{
    /** The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'garages';
    /** 
     * The attributes that are mass assignable.
     * 
     * @var array
     */
    protected $fillable = [
        'name', 
        'customer_level',
    ];

    /**
     * @var string
     */
    public function bikes() {
        return $this->belongsToMany('App\Bike', 'bike_garage', 'bike_id', 'garage_id');
    }
}
