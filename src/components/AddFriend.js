import React, { useState, useGlobal, useEffect } from "reactn";
import uuid from "uuid/v4";

const AddFriend = () => {
  const [userSession] = useGlobal("userSession");
  const [friends, setFriends] = useGlobal("friends");
  const USER_FILE = "users.json";
  const [info, setInfo] = useState({});

  const getFriends = async () => {
    const data = await userSession.getFile(USER_FILE, { decrypt: false });
    if (data) {
      setFriends(JSON.parse(data));
    }
  };

  useEffect(() => {
    getFriends();
  }, [friends]);
  const _handleChange = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const _handleSubmit = async e => {
    e.preventDefault();
    const id = uuid();
    const options = { encrypt: false };
    const params = {
      id,
      ...info
    };

    await userSession.putFile(
      USER_FILE,
      JSON.stringify([...friends, params]),
      //   JSON.stringify([]),
      options
    );
    //   await userSession.putFile(`user-${id}.json`, JSON.stringify(detailParams), options)
  };

  return (
    <>
      <form onSubmit={_handleSubmit}>
        <label htmlFor="first_name">
          <input
            onChange={_handleChange}
            type="text"
            placeholder="First Name"
            name="first_name"
            required
          />
        </label>
        <label htmlFor="last_name">
          <input
            onChange={_handleChange}
            type="text"
            placeholder="Last Name"
            name="last_name"
            required
          />
        </label>
        <label htmlFor="phone">
          <input
            onChange={_handleChange}
            type="text"
            placeholder="555-222-3333"
            name="phone"
            required
          />
        </label>
        <label htmlFor="DOB">
          <input onChange={_handleChange} type="date" name="DOB" required />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};
export default AddFriend;
