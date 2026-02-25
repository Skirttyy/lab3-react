import "./Form.css";
import Button from "./Button";

export default function FormComponent() {
  return (
    <form className="formContainer" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="nume">Numele</label>
      <input id="nume" name="nume" type="text" placeholder="Value" />

      <label htmlFor="prenume">Prenumele</label>
      <input id="prenume" name="prenume" type="text" placeholder="Value" />

      <label htmlFor="serviciu">Alege serviciul dorit</label>
      <select id="serviciu" name="serviciu" defaultValue="">
        <option value="" disabled>
          Value
        </option>
        <option value="serviciu1">Serviciu 1</option>
        <option value="serviciu2">Serviciu 2</option>
      </select>

      <label>Label</label>
      <div className="dateInputs">
        <input type="text" maxLength="2" placeholder="DD" />
        <input type="text" maxLength="2" placeholder="MM" />
        <input type="text" maxLength="4" placeholder="YYYY" />
      </div>

      <div className="buttonsRow">
        <Button type="submit" variant="primary">
          Programeaza-te
        </Button>
        <Button type="button" variant="secondary">
          Anuleaza
        </Button>
      </div>
    </form>
  );
}