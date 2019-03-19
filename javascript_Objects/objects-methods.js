let restaurant = {
    name: "ASB",
    guestcapacity: 75,
    guestCount: 56,
    checkAvailability: function(partySize) {
        let avalibility = this.guestcapacity - this.guestCount
        return partySize <= avalibility
        
    }
}
let status = restaurant.checkAvailability(5)
console.log(status)