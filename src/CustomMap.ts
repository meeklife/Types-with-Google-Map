
// creating an interface that will be the instructions
// for other class if they want to create a marker 
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }

    markerInfo(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0,
                },
            });
    }

    addMarker (mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerInfo()
            });
            infoWindow.open(this.googleMap, marker)
        })
    }
}