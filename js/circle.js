"use strict";

var Vienna = new google.maps.LatLng( 48.2081743, 16.3738189 ),
    map = new google.maps.Map( 
        document.getElementById( 'map' ),
        {
            zoom      : 12,
            center    : Vienna,
            mapTypeId : google.maps.MapTypeId.ROADMAP,

            panControl         : false,
            zoomControl        : false,
            scaleControl       : false,
            streetViewControl  : false,
            overviewMapControl : false
        }
    ),
    markerCenter = new google.maps.Marker( {
        map      : map,
        position : Vienna
    } ),
    markerAPosition = new google.maps.LatLng( 48.23, 16.35 ),
    markerA = new google.maps.Marker( {
        map      : map,
        position : markerAPosition
    } ),
    markerBPosition = new google.maps.LatLng( 48.21, 16.36 ),
    markerB = new google.maps.Marker( {
        map      : map,
        position : markerBPosition
    } ),
    markerCPosition = new google.maps.LatLng( 48.222, 16.35 ),
    markerC = new google.maps.Marker( {
        map      : map,
        position : markerCPosition
    } ),
    rectangle = new google.maps.Rectangle({
        strokeColor   : '#FF0099',
        strokeOpacity : 0.8,
        strokeWeight  : 2,
        fillColor     : '#EE0990',
        fillOpacity   : 0.35,
        map           : map,
        bounds        : new google.maps.LatLngBounds(
            new google.maps.LatLng( 48.226, 16.347 ),
            new google.maps.LatLng( 48.19, 16.401 )
        )
    } ),
    rectangleBounds = rectangle.getBounds(),
    circleRadius = 2000, // Unit: meters
    circle = new google.maps.Circle( {
        map           : map,
        center        : Vienna,
        radius        : circleRadius,
        strokeColor   : '#FF0099',
        strokeOpacity : 1,
        strokeWeight  : 2,
        fillColor     : '#009ee0',
        fillOpacity   : 0.2
    } ),
    circleBounds = circle.getBounds(),
    /**
     * Tests:
     * M*CB = Marker n Circle Bounds
     * M*RB = Marker n Rectange Bounds
     * M*SB = Marker n Spherical Bounds
     */
    // Marker A
    MACB = circleBounds.contains( markerAPosition ),
    MARB = rectangleBounds.contains( markerAPosition ),
    MASB = google.maps.geometry.spherical.computeDistanceBetween( Vienna, markerAPosition ) <= circleRadius,
    // Marker B
    MBCB = circleBounds.contains( markerBPosition ),
    MBRB = rectangleBounds.contains( markerBPosition ),
    MBSB = google.maps.geometry.spherical.computeDistanceBetween( Vienna, markerBPosition ) <= circleRadius,
    // Marker C
    MCCB = circleBounds.contains( markerCPosition ),
    MCRB = rectangleBounds.contains( markerCPosition ),
    MCSB = google.maps.geometry.spherical.computeDistanceBetween( Vienna, markerCPosition ) <= circleRadius;

// Proof, that google Maps API still can't handle "contains" for their paths elements.
console.table( [
    {
        Type : "Circle Bounds", 
        MarkerA : MACB, 
        MarkerB : MBCB, 
        MarkerC : MCCB 
    },
    {
        Type : "Rectangle Bounds", 
        MarkerA : MARB, 
        MarkerB : MBRB, 
        MarkerC : MCRB
    },
    {
        Type : "Spherical Distance",
        MarkerA : MASB,
        MarkerB : MBSB,
        MarkerC : MCSB
    },
] );