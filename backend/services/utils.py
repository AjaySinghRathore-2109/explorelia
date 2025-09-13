# Utility helpers for the backend services

# Simple static mapping from city name to latitude/longitude.
# Extend this dictionary as needed or replace with a geocoding service later.
CITY_COORDS = {
    "mumbai": {"lat": 19.0760, "lon": 72.8777},
    "jaipur": {"lat": 26.9124, "lon": 75.7873},
    # Add more cities here
}

def get_coords(city: str):
    """
    Return a (lat, lon) tuple for the given city.
    Raises KeyError if the city is not in the mapping.
    """
    info = CITY_COORDS.get(city.lower())
    if not info:
        raise KeyError(f"Unknown city: {city}")
    return info["lat"], info["lon"]
