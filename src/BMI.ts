/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  let BMI = 0;
  const heightInMeter = height / 100;
  BMI = weight / heightInMeter ** 2;
  // Stop making changes here!
  return BMI;
}

/**
 * Get BMI State
 * - Accepts BMI as a parameter (type number)
 * - returns a BMIStatus type indicating the BMI category (type BMIStatus)
 */

// Don't change this type
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
  // Don't change this variable
  let BMIState: BMIStatus = "obese";

  // Write your code here 👇🏼
  if (BMI < 18.5) {
    BMIState = "underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    BMIState = "healthy";
  } else if (BMI >= 25 && BMI < 30) {
    BMIState = "overweight";
  } else if (BMI > 30) {
    BMIState = "obese";
  }

  // Stop making changes here!
  return BMIState;
}
/**
 * Get BMI State by Age
 * - Accepts BMI as a parameter (type number)
 * - Accepts age as a parameter (type number)
 * - returns a HealthStatus type indicating the BMI state (type HealthStatus)
 */

// Don't change this type
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
  let BMIState: HealthStatus = "not healthy";

  // Use BMI classification only for adults
  if (age >= 18) {
    const status = getBMIState(BMI);
    if (status === "healthy") {
      BMIState = "healthy";
    }
  }

  return BMIState;
}

export { calculateBMI, getBMIState, getBMIStateByAge };
