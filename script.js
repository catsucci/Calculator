const d_operation = document.querySelector(".operation");
const d_input_result = document.querySelector(".user-input");
const d_b_numbers = document.querySelectorAll(".number");
const d_b_clear = document.querySelector(".clear");
const d_b_dot = document.querySelector(".dot");

const calc = {
  leftOperand: "",
  rightOperand: "",
  operator: "",
  isFloat: false,
  result: "",

  d_operation: document.querySelector(".operation"),
  d_input_result: document.querySelector(".user-input"),

  Reset() {
    this.leftOperand = "";
    this.rightOperand = "";
    this.operator = "";
    this.isFloat = false;
    this.result = "";
  },

  ClearUI() {
    this.d_operation.textContent = "";
    this.d_input_result.textContent = "0";
  },

  UpdateVue(value) {
    this.d_input_result.innerHTML += value;
  },

  UpdateOperand(value) {
    if (value === "0" && this.leftOperand === "" && this.rightOperand === "") {
      return;
    }

    if (value === "." && this.isFloat) {
      return;
    }

    if (value === "." && !this.isFloat) {
      this.isFloat = true;
    }

    if (this.operator === "") {
      this.leftOperand += value;
      this.UpdateVue(value);
    } else {
      this.rightOperand += value;
      this.UpdateVue(value);
    }
  },

  UpdateCalc(value) {
    this.UpdateOperand(value);
  },
};

d_b_numbers.forEach((d_b_number) => {
  d_b_number.addEventListener("click", (e) => {
    calc.UpdateCalc(e.target.textContent);
  });
});

d_b_clear.addEventListener("click", () => {
  calc.Reset();
  calc.ClearUI();
});

d_b_dot.addEventListener("click", (e) => {
  calc.UpdateCalc(e.target.textContent);
});
