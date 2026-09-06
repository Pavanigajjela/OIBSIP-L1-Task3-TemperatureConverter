# Temperature Converter

An interactive web tool that converts temperature values between Celsius, Fahrenheit, and Kelvin with real-time input validation.

## Features

- **Numeric Input Validation**: Rejects non-numeric input with clear error messages
- **Unit Selection**: Dropdown menu to choose input unit (Celsius, Fahrenheit, or Kelvin)
- **Simultaneous Conversion**: Displays all three temperature units at once
- **Absolute Zero Protection**: Warns users when input violates absolute zero limits
- **Clean Split Layout**: Modern UI with white input panel and teal results panel
- **Responsive Design**: Works seamlessly on different screen sizes

## Tech Stack

- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling with flexbox layout
- **JavaScript (Vanilla)**: Conversion logic and validation

## Conversion Formulas

- **Celsius to Fahrenheit**: `(°C × 9/5) + 32 = °F`
- **Fahrenheit to Celsius**: `(°F - 32) × 5/9 = °C`
- **Celsius to Kelvin**: `°C + 273.15 = K`
- **Kelvin to Celsius**: `K - 273.15 = °C`
- **Fahrenheit to Kelvin**: `((°F - 32) × 5/9) + 273.15 = K`
- **Kelvin to Fahrenheit**: `((K - 273.15) × 9/5) + 32 = °F`

## Absolute Zero Limits

- **Celsius**: -273.15°C
- **Fahrenheit**: -459.67°F
- **Kelvin**: 0K

## How to Use

1. Enter a temperature value in the input field
2. Select the input unit from the dropdown (Celsius, Fahrenheit, or Kelvin)
3. Click the "Convert" button
4. View the converted values in all three units on the right panel

## Project Structure

```
TemperaturConverter/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── script.js       # JavaScript conversion logic
├── README.md       # Project documentation
└── screenshot.png  # Application screenshot
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pavanigajjela/OIBSIP-L1-Task3-TemperatureConverter.git
   ```

2. Open `index.html` in a web browser

## Usage

Simply open the `index.html` file in any modern web browser to use the temperature converter.

## Screenshots

![Temperature Converter Screenshot](screenshot.png)

## License

This project is open source and available for educational purposes.

## Author

Created as part of OIBSIP Level 1 Task 3
