<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Carbon\Carbon;
use App\Models\UserSubscription;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getIsActiveAttribute()
    {
        if (!$this->LastActiveUserSubscription) {
            return false;
        }

        $dateNow = Carbon::now();
        $dateExpired = Carbon::create($this->LastActiveUserSubscription->expired_date);
        return $dateNow->lessThanOrEqualTo($dateExpired);
    }

    /**
     * Get the LastActiveUserSubscription associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function LastActiveUserSubscription(): HasOne
    {
        return $this->hasOne(UserSubscription::class)->wherePaymentStatus('PAID')->latest();
    }
}
