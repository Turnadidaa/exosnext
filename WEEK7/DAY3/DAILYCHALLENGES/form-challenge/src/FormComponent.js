import React from 'react';

function FormComponent(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={props.formData.firstName}
        onChange={props.handleChange}
      />
      <br />

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={props.formData.lastName}
        onChange={props.handleChange}
      />
      <br />

      <label>
        <input
          type="checkbox"
          name="isFriendly"
          checked={props.formData.isFriendly}
          onChange={props.handleChange}
        />
        Is Friendly?
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.formData.gender === 'male'}
          onChange={props.handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.formData.gender === 'female'}
          onChange={props.handleChange}
        />
        Female
      </label>
      <br />
    </form>
  );
}

export default FormComponent;
