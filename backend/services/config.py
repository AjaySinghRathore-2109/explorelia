import os
from dotenv import load_dotenv

# Load environment variables from .env in the backend directory
load_dotenv()

WAQI_TOKEN = os.getenv("WAQI_TOKEN")
if not WAQI_TOKEN:
    raise RuntimeError("WAQI_TOKEN not set in .env")

WAQI_BASE_URL = os.getenv("WAQI_BASE_URL")

OPEN_METEO_BASE_URL = os.getenv("OPEN_METEO_BASE_URL")

