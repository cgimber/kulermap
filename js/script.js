/*******************

	Globals

********************/
//namespace
var colormap = {};

//fusion table codes
var tableID = '1YWgnDmrUjxioD7Bkd7vYmLG02a8DvqvjbP9OI4tK';
var apiKey = 'AIzaSyCSJBHBRULYD5qy6UJxyNQGrNG8J7WifB4';

//google maps
var map;
var infowindow = new google.maps.InfoWindow();

//colors
var colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white'];

var redVisible = true;
var redQueries = ['red', '赤', 'rojo', 'merah', 'أحمر'];
var redMarkers = [];

var orangeVisible = true;
var orangeQueries = ['orange', '橙', 'naranja', 'oren', 'البرتقالي'];
var orangeMarkers = [];

var yellowVisible = true;
var yellowQueries = ['yellow', '黄色', 'amarillo', 'kuning', 'أصفر'];
var yellowMarkers = [];

var greenVisible = true;
var greenQueries = ['green', '緑', 'verde', 'hijau', 'أخضر'];
var greenMarkers = [];

var blueVisible = true;
var blueQueries = ['blue', '青', 'azul', 'biru', 'أزرق'];
var blueMarkers = [];

var purpleVisible = true;
var purpleQueries = ['purple', '紫', 'púrpura', 'ungu', 'أرجواني'];
var purpleMarkers = [];

var blackVisible = true;
var blackQueries = ['black', '黒', 'negro', 'hitam', 'أسود'];
var blackMarkers = [];

var whiteVisible = true;
var whiteQueries = ['white', '白', 'blanco', 'putih', 'أبيض'];
var whiteMarkers = [];


var geocoder = new google.maps.Geocoder();

/*******************

	Run on page load

********************/

$(document).ready(function () {
    colormap.init();
});

/*******************

	Init

********************/

colormap.init = function () {

    var style = [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "0"
            }
        ]
    },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
            },
                {
                    "color": "#000000"
            },
                {
                    "lightness": 40
            }
        ]
    },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
            },
                {
                    "color": "#000000"
            },
                {
                    "lightness": 16
            }
        ]
    },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 20
            }
        ]
    },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 17
            },
                {
                    "weight": 1.2
            }
        ]
    },
        {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
            },
                {
                    "weight": ".30"
            }
        ]
    },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 20
            }
        ]
    },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "5"
            }
        ]
    },
        {
            "featureType": "landscape",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 21
            }
        ]
    },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "poi.business",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 17
            }
        ]
    },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 29
            },
                {
                    "weight": 0.2
            },
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 18
            }
        ]
    },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 16
            }
        ]
    },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 19
            }
        ]
    },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
            },
                {
                    "lightness": 17
            }
        ]
    },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "3"
            }
        ]
    },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
            }
        ]
    },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
            }
        ]
    }
]

    /***********************

		User interactions
		
	************************/

    //quick search buttons
    $('.btn').click(function () {
        $(this).toggleClass('inactive');
    })

    //    for(i in yellowMarkers){yellowMarkers[i].setMap(map)};
    //    for(i in yellowMarkers){yellowMarkers[i].setMap(null)};

    $('#address').keypress(function (e) {
        if (e.which == 13) {
            geocodeAddress();
            return false;
        }
    });

    //Display modal on info-button press

    $('#info-btn').click(function (e) {
        e.preventDefault();
        $('#info-modal').fadeToggle();
        $('#map_canvas').toggleClass('blur');
        $('#geocoder').toggleClass('blur');
    });

    //Explore --> Color modal
    $('#explore-btn').click(function (e) {
        e.preventDefault();
        $('#welcome-modal').fadeOut();
        $('#map_canvas').toggleClass('blur');
        $('#geocoder').toggleClass('blur');
        $('#info-btn').toggleClass('blur');
    });

    //Sidebar actions
    $(document).ready(function () {
        $(".empty").fadeIn(0);
        $(".red").fadeOut(0);
        $(".orange").fadeOut(0);
        $(".yellow").fadeOut(0);
        $(".green").fadeOut(0);
        $(".blue").fadeOut(0);
        $(".purple").fadeOut(0);
        $(".black").fadeOut(0);
        $(".white").fadeOut(0);
    });

    function hideAll() {
        //        $('.active').removeClass('active');
        $(".empty").fadeOut(0);
        $(".red").fadeOut(0);
        $(".orange").fadeOut(0);
        $(".yellow").fadeOut(0);
        $(".green").fadeOut(0);
        $(".blue").fadeOut(0);
        $(".purple").fadeOut(0);
        $(".black").fadeOut(0);
        $(".white").fadeOut(0);
    }

    $(".swatch_red").click(function (e) {
        e.preventDefault();
        hideAll();
        colormap.clearMarkers();
        $(".red").fadeIn(600);
        colormap.toggleMarkers('red');
    });
    $(".swatch_orange").click(function (e) {
        e.preventDefault();
        hideAll();
        colormap.clearMarkers();
        $(".orange").fadeIn(600);
        colormap.toggleMarkers('orange');
    });
    $(".swatch_yellow").click(function (e) {
        e.preventDefault();
        hideAll();
        colormap.clearMarkers();
        $(".yellow").fadeIn(600);
        colormap.toggleMarkers('yellow');
    });
    $(".swatch_green").click(function (e) {
        e.preventDefault();
        hideAll();
        colormap.clearMarkers();
        $(".green").fadeIn(600);
        colormap.toggleMarkers('green');
    });
    $(".swatch_blue").click(function (e) {
        e.preventDefault();
        hideAll();
        colormap.clearMarkers();
        $(".blue").fadeIn(600);
        colormap.toggleMarkers('blue');
    });
    $(".swatch_purple").click(function (e) {
        e.preventDefault();
        hideAll();
        colormap.clearMarkers();
        $(".purple").fadeIn(600);
        colormap.toggleMarkers('purple');
    });
    $(".swatch_black").click(function (e) {
        e.preventDefault();
        hideAll();
        colormap.clearMarkers();
        $(".black").fadeIn(600);
        colormap.toggleMarkers('black');
    });
    $(".swatch_white").click(function (e) {
        e.preventDefault();
        hideAll();
        colormap.clearMarkers();
        $(".white").fadeIn(600);
        colormap.toggleMarkers('white');
    });



    /***********************

		Create the map
		
	************************/

    //center lat/lon
    var latlng = new google.maps.LatLng(0, 0);

    //map configurations
    var myOptions = {
        zoom: 3,
        minZoom: 2,
        center: latlng,
        styles: style,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        scrollwheel: true
    };

    //initialize the map
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

//    //add custom buttons for the zoom-in/zoom-out on the map
//    function CustomZoomControl(controlDiv, map) {
//        //grap the zoom elements from the DOM and insert them in the map 
//        var controlUIzoomIn = document.getElementById('cd-zoom-in'),
//            controlUIzoomOut = document.getElementById('cd-zoom-out');
//        controlDiv.appendChild(controlUIzoomIn);
//        controlDiv.appendChild(controlUIzoomOut);
//
//        // Setup the click event listeners and zoom-in or out according to the clicked element
//        google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
//            map.setZoom(map.getZoom() + 1)
//        });
//        google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
//            map.setZoom(map.getZoom() - 1)
//        });
//    }
//
//    var zoomControlDiv = document.createElement('div');
//    var zoomControl = new CustomZoomControl(zoomControlDiv, map);
//
//    //insert the zoom div on the top left of the map
//    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(zoomControlDiv);

    google.maps.event.addListener(map, "click", function (event) {
        infowindow.close();
    });

    colormap.getTweets('red');
    colormap.getTweets('orange');
    colormap.getTweets('yellow');
    colormap.getTweets('green');
    colormap.getTweets('blue');
    colormap.getTweets('purple');
    colormap.getTweets('black');
    colormap.getTweets('white');

}

//get tweets
colormap.getTweets = function (color) {

    /*******************

		Call Fusion Tables

	********************/

    //01 Choose Color <>
    //02 Choose Keyword <>
    //03 Create Tweet Objects <>
    //04 Create Marker & push tweet object to colored array 

    switch (color) {
    case 'red':
        var queryList = redQueries;
        break;
    case 'orange':
        var queryList = orangeQueries;
        break;
    case 'yellow':
        var queryList = yellowQueries;
        break;
    case 'green':
        var queryList = greenQueries;
        break;
    case 'blue':
        var queryList = blueQueries;
        break;
    case 'purple':
        var queryList = purpleQueries;
        break;
    case 'black':
        var queryList = blackQueries;
        break;
    case 'white':
        var queryList = whiteQueries;
        break;
    }

    for (i = 0; i < queryList.length; i++) {

        //define the WHERE SQL constraint
        var WHERE = encodeURI(' WHERE text LIKE \'%' + queryList[i] + '%\'');
        console.log('color = ' + color + '\nqueryList[i] = ' + queryList[i]);

        //call the proxy file to get tweets from Twitter
        $.getJSON('https://www.googleapis.com/fusiontables/v2/query?sql=SELECT * FROM ' + tableID + WHERE + '&key=' + apiKey, function (data) {

            console.log(data);

            $.each(data.rows, function (i, item) {

                //create tweet object for createMarker
                var tweet = {
                    lat: item[1],
                    lng: item[2],
                    text: item[0]
                }

                //map it
                colormap.createMarker(tweet, color);

            });

        })
    }
    console.log('----- ' + color + ' query complete -----');
}

colormap.createMarker = function (options, color) {

    var markerLatLng = new google.maps.LatLng(options.lat, options.lng);

    var marker = new google.maps.Marker({
        position: markerLatLng,
        map: map,
        //        title: options.text,
        //define icon png based on color
        icon: 'http://sandbox.idre.ucla.edu/dh150/2015/Gimber_Christian/assets/marker-' + color + '-03.png',
        opacity: 0.33
    });

    switch (color) {
    case 'red':
        redMarkers.push(marker);
        break;
    case 'orange':
        orangeMarkers.push(marker);
        break;
    case 'yellow':
        yellowMarkers.push(marker);
        break;
    case 'green':
        greenMarkers.push(marker);
        break;
    case 'blue':
        blueMarkers.push(marker);
        break;
    case 'purple':
        purpleMarkers.push(marker);
        break;
    case 'black':
        blackMarkers.push(marker);
        break;
    case 'white':
        whiteMarkers.push(marker);
        break;
    }

    //event listener that activates the infowindow on user click
    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.setContent('<div style="width:200px">' + Checkurl(options.text) + '</div>');
        infowindow.open(map, marker);
    });

}

//resize map on window resize event
google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});

colormap.clearMarkers = function () {
    if (redVisible) {
        for (i in redMarkers) {
            redMarkers[i].setMap(null)
        };
        redVisible = false;
    }
    if (orangeVisible) {
        for (i in orangeMarkers) {
            orangeMarkers[i].setMap(null)
        };
        orangeVisible = false;
    }
    if (yellowVisible) {
        for (i in yellowMarkers) {
            yellowMarkers[i].setMap(null)
        };
        yellowVisible = false;
    }
    if (greenVisible) {
        for (i in greenMarkers) {
            greenMarkers[i].setMap(null)
        };
        greenVisible = false;
    }
    if (blueVisible) {
        for (i in blueMarkers) {
            blueMarkers[i].setMap(null)
        };
        blueVisible = false;
    }
    if (purpleVisible) {
        for (i in purpleMarkers) {
            purpleMarkers[i].setMap(null)
        };
        purpleVisible = false;
    }
    if (blackVisible) {
        for (i in blackMarkers) {
            blackMarkers[i].setMap(null)
        };
        blackVisible = false;
    }
    if (whiteVisible) {
        for (i in whiteMarkers) {
            whiteMarkers[i].setMap(null)
        };
        whiteVisible = false;
    }
}

colormap.toggleMarkers = function (color) {

    switch (color) {
    case 'red':
        if (redVisible) {
            for (i in redMarkers) {
                redMarkers[i].setMap(null)
            };
            redVisible = false;
        } else {
            for (i in redMarkers) {
                redMarkers[i].setMap(map)
            };
            redVisible = true;
        }
        break;
    case 'orange':
        if (orangeVisible) {
            for (i in orangeMarkers) {
                orangeMarkers[i].setMap(null)
            };
            orangeVisible = false;
        } else {
            for (i in orangeMarkers) {
                orangeMarkers[i].setMap(map)
            };
            orangeVisible = true;
        }
        break;
    case 'yellow':
        if (yellowVisible) {
            for (i in yellowMarkers) {
                yellowMarkers[i].setMap(null)
            };
            yellowVisible = false;
        } else {
            for (i in yellowMarkers) {
                yellowMarkers[i].setMap(map)
            };
            yellowVisible = true;
        }
        break;
    case 'green':
        if (greenVisible) {
            for (i in greenMarkers) {
                greenMarkers[i].setMap(null)
            };
            greenVisible = false;
        } else {
            for (i in greenMarkers) {
                greenMarkers[i].setMap(map)
            };
            greenVisible = true;
        }
        break;
    case 'blue':
        if (blueVisible) {
            for (i in blueMarkers) {
                blueMarkers[i].setMap(null)
            };
            blueVisible = false;
        } else {
            for (i in blueMarkers) {
                blueMarkers[i].setMap(map)
            };
            blueVisible = true;
        }
        break;
    case 'purple':
        if (purpleVisible) {
            for (i in purpleMarkers) {
                purpleMarkers[i].setMap(null)
            };
            purpleVisible = false;
        } else {
            for (i in purpleMarkers) {
                purpleMarkers[i].setMap(map)
            };
            purpleVisible = true;
        }
        break;
    case 'black':
        if (blackVisible) {
            for (i in blackMarkers) {
                blackMarkers[i].setMap(null)
            };
            blackVisible = false;
        } else {
            for (i in blackMarkers) {
                blackMarkers[i].setMap(map)
            };
            blackVisible = true;
        }
        break;
    case 'white':
        if (whiteVisible) {
            for (i in whiteMarkers) {
                whiteMarkers[i].setMap(null)
            };
            whiteVisible = false;
        } else {
            for (i in whiteMarkers) {
                whiteMarkers[i].setMap(map)
            };
            whiteVisible = true;
        }
        break;
    }
}


/*******************

	Geocode function
	https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple

********************/

function geocodeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            //           map.fitBounds(results[0].geometry.location);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

/*******************

	convert URL 
	links into 
	hyperlinks

********************/

function Checkurl(text) {
    var url1 = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g,
        url2 = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g;

    var html = $.trim(text);
    if (html) {
        html = html
            .replace(url1, '$1<a style="color:grey; text-decoration:underline;" target="_blank"  href="http://$2">$2</a>$3')
            .replace(url2, '$1<a style="color:grey; text-decoration:underline;" target="_blank"  href="$2">$2</a>$5');
    }
    return html;
}