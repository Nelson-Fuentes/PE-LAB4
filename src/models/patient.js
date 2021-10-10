class Patient {
    constructor(
        last_name,
        first_name,
        date_birth,
        stature,
        address,
        latitude,
        longitude,
        id,
        tracking
    ){
        this.last_name = last_name
        this.first_name = first_name
        this.date_birth = date_birth
        this.stature = stature
        this.address = address
        this.latitude = latitude
        this.longitude = longitude
        this.id = id
        this.tracking = tracking
    }

}

export default Patient