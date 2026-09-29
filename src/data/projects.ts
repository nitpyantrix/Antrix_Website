import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'RC Aircraft Long-Range Telemetry & Flight Controller',
    category: 'Aerospace',
    shortDescription: 'Custom avionics package combining 433MHz LoRa link, Pitot-static airspeed sensing, and fail-safe return-to-home algorithms.',
    fullDescription: 'An aerospace engineering effort developing an indigenous flight computer and long-range telemetry system for fixed-wing research drones. Features low-latency bidirectional control using nRF24L01 + PA/LNA for manual RC override alongside a secondary 433MHz LoRa link transmitting airspeed, pitch/roll/yaw quaternions, battery metrics, and GPS positioning to a custom ground station GUI.',
    technologies: ['ESP32-S3', 'nRF24L01', 'SX1278 LoRa', 'MPU-6050 6-DOF', 'BMP280 Baro', 'FreeRTOS', 'Python / PyQt5'],
    status: 'Active Prototype',
    team: [
      { name: 'Aditya S.', role: 'Avionics Hardware & PCB' },
      { name: 'Karthik V.', role: 'Embedded Firmware' },
      { name: 'Meera N.', role: 'Ground Control Station' }
    ],
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Bidirectional telemetry range tested up to 4.2 km line-of-sight',
      'Autonomous return-to-home (RTH) waypoint sequencing on link loss',
      'Real-time ground telemetry recording with Blackbox SD logging'
    ],
    githubUrl: 'https://github.com/antrix-nitpy/rc-telemetry-avionics',
    docsUrl: '#'
  },
  {
    id: 'proj-2',
    name: 'Harmonic-Drive Automated Star Tracker Alt-Az Mount',
    category: 'Astronomy',
    shortDescription: 'Microcontroller-driven equatorial/alt-azimuth tracking mount for long-exposure DSLR astrophotography without star trailing.',
    fullDescription: 'Designed to eliminate star trailing in long-exposure deep-sky imaging. Utilizes high-precision NEMA 17 stepper motors coupled with 3D-printed harmonic strain-wave reduction gears (50:1 ratio) to achieve sub-arcsecond tracking smoothness. Runs an adapted OnStep firmware with LX200 protocol compatibility for direct control via Stellarium and KStars/INDI.',
    technologies: ['Arduino Mega 2560', 'TMC2209 Silent Drivers', 'OnStep Firmware', 'SolidWorks CAD', 'LX200 Protocol', 'PETG 3D Printing'],
    status: 'Flight Ready',
    team: [
      { name: 'Sneha R.', role: 'Mechanical & Gear Design' },
      { name: 'Jaikrishnan P.', role: 'Firmware & Microstepping' }
    ],
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Periodic error under ±4 arcseconds after PPEC calibration',
      'Supports payloads up to 4.5 kg (DSLR + 300mm telephoto or small refractor)',
      'Sidereal, Lunar, and Solar tracking speed profiles'
    ],
    githubUrl: 'https://github.com/antrix-nitpy/star-tracker-mount',
    docsUrl: '#'
  },
  {
    id: 'proj-3',
    name: 'Atmospheric Research CanSat Payload',
    category: 'Space Technology',
    shortDescription: 'Canister-sized satellite payload equipped with temperature, altitude, UV radiometer, and live radio beacon launched via model rocket.',
    fullDescription: 'A standard 330ml CanSat payload engineered to sample atmospheric pressure, altitude, UV index, and airborne particulate concentration during a parachute-retarded descent from 1,000 meters. Includes an autonomous active buzzer beacon and GPS rescue tracker.',
    technologies: ['Raspberry Pi Pico RP2040', 'BMP388 Precision Barometer', 'VEML6075 UV Sensor', 'LoRa 868MHz', 'MicroSD FATFS', 'Eagle PCB'],
    status: 'Completed',
    team: [
      { name: 'Pooja M.', role: 'Payload Sensor Array' },
      { name: 'Rohan K.', role: 'Telemetry & Parachute Recovery' }
    ],
    image: 'https://images.unsplash.com/photo-1517976487507-5b3b4b45f9da?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Sampled 20 data points per second during a 4-minute descent profile',
      'Recovered intact with 100% telemetry packet reception'
    ],
    githubUrl: 'https://github.com/antrix-nitpy/cansat-payload',
    docsUrl: '#'
  },
  {
    id: 'proj-4',
    name: 'SANKALP-1 Autonomous Planetary Rover Prototype',
    category: 'Robotics',
    shortDescription: 'Six-wheel rocker-bogie exploration rover capable of autonomous terrain traversal, obstacle detection, and soil probe sampling.',
    fullDescription: 'Inspired by NASA\'s Curiosity and ISRO\'s Pragyan rovers, SANKALP-1 employs a differential rocker-bogie mechanical suspension ensuring all six wheels maintain contact across jagged obstacles up to twice wheel diameter. Controlled by ROS 2 Humble on a Raspberry Pi 5 with 2D LiDAR SLAM for real-time map generation and waypoint path planning.',
    technologies: ['ROS 2 Humble', 'Raspberry Pi 5', 'RPLiDAR A1', 'Differential Rocker-Bogie', 'OpenCV', 'Brushless DC Motors', 'PID Control'],
    status: 'Active Prototype',
    team: [
      { name: 'Jaikrishnan P.', role: 'Project Head & Systems Architecture' },
      { name: 'Aditya S.', role: 'Suspension & Chassis Mechanics' },
      { name: 'Naveen T.', role: 'Motor Drivers & Power Bus' }
    ],
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Climbs slopes up to 32 degrees without chassis tilt instability',
      'Real-time SLAM 2D occupancy grid navigation in unknown rooms',
      '12V 10Ah LiFePO4 battery pack providing 3.5 hours continuous exploration'
    ],
    githubUrl: 'https://github.com/antrix-nitpy/sankalp-rover',
    docsUrl: '#'
  },
  {
    id: 'proj-5',
    name: 'AstroStack: Astronomical Deep-Sky Image Calibration Pipeline',
    category: 'Astronomy',
    shortDescription: 'Open-source Python software for stacking and calibrating FITS and RAW sub-exposures with cosmic-ray rejection.',
    fullDescription: 'A modular, high-throughput computational astrophysics tool designed for student observers. Automates the ingestion of camera raw formats (.CR2, .NEF, .ARW, .FITS), calibrates Master Dark, Flat, and Bias frames, performs star detection and affine homography alignment, and blends images using sigma-clipped median stacking to boost Signal-to-Noise Ratio (SNR).',
    technologies: ['Python 3.11', 'Astropy', 'NumPy', 'SciPy', 'OpenCV', 'Numba JIT', 'RawPy'],
    status: 'Completed',
    team: [
      { name: 'Karthik V.', role: 'Algorithm Design & Alignment' },
      { name: 'Pooja M.', role: 'Image Processing & UI' }
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Boosts SNR by ~4.2x on 50-frame stacked datasets',
      'Multi-core parallel processing using Numba and joblib',
      'Exports directly to 32-bit linear TIFF and FITS for scientific analysis'
    ],
    githubUrl: 'https://github.com/antrix-nitpy/astrostack-pipeline',
    docsUrl: '#'
  },
  {
    id: 'proj-6',
    name: 'Automated Ground Station & NOAA Weather Satellite Decoder',
    category: 'Electronics',
    shortDescription: 'RTL-SDR automated receiver station capturing real-time APT satellite imagery and Meteor-M2 LRPT digital transmissions.',
    fullDescription: 'Deploys a custom double cross dipole antenna tuned to 137.5 MHz atop the NITPY electronics building, paired with an RTL-SDR dongle, low-noise amplifier (LNA), and automated scheduler scripts in Raspberry Pi. Automatically calculates Doppler shifts during satellite passes and demodulates weather imagery of the Indian Ocean subcontinent.',
    technologies: ['RTL-SDR v4', 'QFH / Double Cross Antenna', 'WXtoImg / SatDump', 'Gpredict Orbit Tracker', 'Raspberry Pi 4', 'Linux Bash'],
    status: 'Flight Ready',
    team: [
      { name: 'Sneha R.', role: 'RF Antenna & LNA Design' },
      { name: 'Rohan K.', role: 'Automated Pass Scheduling' }
    ],
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Daily live cloud-cover satellite imagery of Bay of Bengal',
      'Fully autonomous operation: tracks pass, records, decodes, and archives',
      'Directly feeds local weather data into club observation planning'
    ],
    githubUrl: 'https://github.com/antrix-nitpy/ground-station-sdr',
    docsUrl: '#'
  }
];
