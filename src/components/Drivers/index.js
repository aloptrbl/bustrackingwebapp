import React, { Component } from "react";
import { withAuthorization } from "../Session";
import Bus from "../../img/school-bus.svg";
import { withFirebase } from "../Firebase";
import cogoToast from 'cogo-toast';
class Drivers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      active: true,
      activeEdit: true,
      deviceid: null,
      drivername: null,
      platenumber: null,
      fromlocation: null,
      tolocation: null,
      edit_deviceid: null,
      edit_drivername: null,
      edit_platenumber: null,
      edit_tolocation: null,
      edit_fromlocation: null,
    };
  }

  toggleClass() {
    const currentState = this.state.active;
    console.log("active" + currentState);
    this.setState({ active: !currentState });
  }

  toggleClassEdit(id) {
    console.log(id);
    const currentState = this.state.activeEdit;
    console.log("active" + currentState);
    this.setState({ activeEdit: !currentState });
    this.props.firebase.driver(id).on("value", (snapshot) => {

      const usersObject =  snapshot.val() != null ? snapshot.val() : "";
      this.setState({edit_fromlocation: null ?? usersObject.from_location, edit_tolocation: null ?? usersObject.to_location, edit_uid: null ?? id, edit_platenumber: null ?? usersObject.plate_number, edit_deviceid: null ?? usersObject.device_id, edit_drivername: null ?? usersObject.driver_name });
    });
  }

  toggleDelete(id) {
console.log(id);
this.props.firebase.driver(id).remove();
cogoToast.error('You successfully delete the device details.');
  }

  driverNameChangeHandler = (event) => {
    this.setState({ drivername: event.target.value });
  };

  deviceIdChangeHandler = (event) => {
    this.setState({ deviceid: event.target.value });
  };

  plateNumberChangeHandler = (event) => {
    this.setState({ platenumber: event.target.value });
  };

  toLocationChangeHandler = (event) => {
    this.setState({ tolocation: event.target.value });
  };

  fromLocationChangeHandler = (event) => {
    this.setState({ fromlocation: event.target.value });
  };

  edit_driverNameChangeHandler = (event) => {
    this.setState({ edit_drivername: event.target.value });
  };

  edit_deviceIdChangeHandler = (event) => {
    this.setState({ edit_deviceid: event.target.value });
  };

  edit_plateNumberChangeHandler = (event) => {
    this.setState({ edit_platenumber: event.target.value });
  };

  edit_toLocationChangeHandler = (event) => {
    this.setState({ edit_tolocation: event.target.value });
  };

  edit_fromLocationChangeHandler = (event) => {
    this.setState({ edit_fromlocation: event.target.value });
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.props.firebase
      .writeUserData(
        this.state.deviceid,
        this.state.drivername,
        this.state.platenumber,
        this.state.tolocation,
        this.state.fromlocation
      )
      .then((result) => {
        const currentState = this.state.active;
        console.log("active" + currentState);
        this.setState({
          active: !currentState,
          deviceid: "",
          platenumber: "",
          drivername: "",
          tolocation: "",
          fromlocation: ""
        });
        cogoToast.success('You successfully add new device details.');
      });
  };

  mySubmitEditHandler = (event) => {
    event.preventDefault();
    this.props.firebase
      .updateUserData(
        this.state.edit_uid,
        this.state.edit_deviceid,
        this.state.edit_drivername,
        this.state.edit_platenumber,
        this.state.edit_tolocation,
        this.state.edit_fromlocation
      )
      .then((result) => {
        const currentState = this.state.activeEdit;
        this.setState({
          activeEdit: !currentState,
          edit_deviceid: "",
          edit_platenumber: "",
          edit_drivername: "",
          edit_fromlocation: "",
          edit_tolocation: ""
        });
        cogoToast.success('You successfully edit device details.');
      });
  };

  componentDidMount() {
    this.props.firebase.drivers().on("value", (snapshot) => {
      const usersObject = snapshot.val();
      const usersList =
        usersObject !== null
          ? Object.keys(usersObject).map((key) => ({
              ...usersObject[key],
              uid: key,
            }))
          : null;
      this.setState({ User: usersList });
    });


  };
  render() {
    return (

      <div class="bg-gray-900 font-sans h-screen">
        <header class="fixed z-50 h-16 w-full bg-gray-900 shadow flex items-center justify-between">
          <div class="flex items-center h-full">
            <div class="flex items-center text-center h-full w-48 border-grey-dark">
              <span class="w-full text-white text-sm uppercase flex justify-center items-center font-extrabold">
                {" "}
                <svg
                  version="1.1"
                  id="Layer_1"
                  fill="white"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M89,38.5c3.3,0,6-2.7,6-6v-10c0-3.3-2.7-6-6-6h-4v-4c0-3.3-2.7-6-6-6H21c-3.3,0-6,2.7-6,6v4h-4c-3.3,0-6,2.7-6,6v10
	c0,3.3,2.7,6,6,6h4v6h-4c-3.3,0-6,2.7-6,6v27c0,3.3,2.7,6,6,6v4c0,3.3,2.7,6,6,6h8c3.3,0,6-2.7,6-6v-4h38v4c0,3.3,2.7,6,6,6h8
	c3.3,0,6-2.7,6-6v-4c3.3,0,6-2.7,6-6v-27c0-3.3-2.7-6-6-6h-4v-6H89z M85,20.5h4c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2h-4V20.5z
	 M63,10.5h16c1.1,0,2,0.9,2,2v4H63V10.5z M41,10.5h18v6H41V10.5z M19,12.5c0-1.1,0.9-2,2-2h16v6H19V12.5z M19,20.5h62v24H67.9
	c-0.5-2.8-2.9-5-5.9-5H38c-3,0-5.4,2.2-5.9,5H19V20.5z M36,59.5v-6h28v6H36z M64,63.5v6H36v-6H64z M36,49.5v-4c0-1.1,0.9-2,2-2h24
	c1.1,0,2,0.9,2,2v4H36z M11,34.5c-1.1,0-2-0.9-2-2v-10c0-1.1,0.9-2,2-2h4v14H11z M9,50.5c0-1.1,0.9-2,2-2h21v21h-6v-10
	c0-2.8-2.2-5-5-5H9V50.5z M9,58.5h12c0.5,0,1,0.5,1,1v10H9V58.5z M27,87.5c0,1.1-0.9,2-2,2h-8c-1.1,0-2-0.9-2-2v-4h12V87.5z
	 M85,87.5c0,1.1-0.9,2-2,2h-8c-1.1,0-2-0.9-2-2v-4h12V87.5z M91,77.5c0,1.1-0.9,2-2,2H11c-1.1,0-2-0.9-2-2v-4h82V77.5z M91,69.5H78
	v-10c0-0.5,0.5-1,1-1h12V69.5z M89,48.5c1.1,0,2,0.9,2,2v4H79c-2.8,0-5,2.2-5,5v10h-6v-21H89z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="flex items-center h-full text-sm">
            <div class="flex items-center h-full">
              <a href="#" class="flex items-center text-white h-full px-4">
              </a>
              <a href="#" class="flex items-center text-white h-full px-4">
                Sign Out
              </a>
            </div>
          </div>
        </header>

        <div id="main" class="pt-16 flex">
          <div class="bg-blue-800 relative h-full min-h-screen w-1/6">
            <div class="xl:py-2">
              <div class="hidden xl:block uppercase font-bold text-grey-darker text-xs px-4 py-2">
                Main
              </div>
              <div class="group relative sidebar-item with-children">
                <a
                  href="/home"
                  class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4  border-transparent hover:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-6 w-6 text-grey-darker fill-current xl:mr-2"
                  >
                    <path
                      fill="white"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"
                      class="heroicon-ui"
                    ></path>
                  </svg>
                  <div class="text-white text-xs">Dashboard</div>
                </a>
              </div>
              <div class="group relative sidebar-item with-children">
                <a
                  href="/drivers"
                  class={
                    "active bg-gray-900 block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-6 w-6 text-grey-darker fill-current xl:mr-2"
                  >
                    <path
                      fill="white"
                      d="M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"
                      class="heroicon-ui"
                    ></path>
                  </svg>
                  <div class="text-white text-xs">Drivers</div>
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white p-10  h-full min-h-screen w-5/6">
            <button
              onClick={() => this.toggleClass()}
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              + Add
            </button>
            <table class="table-fixed w-auto">
              <thead>
                <tr>
                  <th class="w-1/2 px-4 py-2">Driver Name</th>
                  <th class="w-1/4 px-4 py-2">Plate Number</th>
                  <th class="w-1/4 px-4 py-2">Device ID</th>
                  <th class="w-1/4 px-4 py-2">From Location</th>
                  <th class="w-1/4 px-4 py-2">To Location</th>
                  <th class="w-1/4 px-4 py-2"></th>
                  <th class="w-1/4 px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.User === null
                  ? null
                  : this.state.User.map((item, i) => (
                      <tr>
                        <td class="border px-4 py-2">{item.driver_name}</td>
                        <td class="border px-4 py-2">{item.plate_number}</td>
                        <td class="border px-4 py-2">{item.device_id}</td>
                        <td class="border px-4 py-2">{item.from_location}</td>
                        <td class="border px-4 py-2">{item.to_location}</td>
                        <td class="border px-4 py-2">
                          <button
                            onClick={() => this.toggleClassEdit(item.uid)}
                            class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
                          >
                            Edit
                          </button>
                        </td>
                        <td class="border px-4 py-2">
                          <button
                            onClick={() => this.toggleDelete(item.uid)}
                            class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        <div
          class={`absolute z-50 bg-gray-900  bottom-0 h-screen w-6/12  lg:w-1/6 sm:w-6/6 md:w-3/5 right-0 ${
            this.state.active ? "hidden" : null
          }`}
        >
          <img
            onClick={() => this.toggleClass()}
            src="https://image.flaticon.com/icons/png/512/45/45372.png"
            class="float-right cursor-pointer"
            style={{ margin: 15 + "px" }}
            width="35"
            height="35"
          />
          <h1 class="text-white text-center pt-5 font-bold text-lg">
            Add Driver
          </h1>
          <form onSubmit={this.mySubmitHandler} class="w-full max-w-sm p-5">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Device ID
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="deviceid"
                  onChange={this.deviceIdChangeHandler}
                  value={this.state.deviceid}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Driver Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="drivername"
                  onChange={this.driverNameChangeHandler}
                  value={this.state.drivername}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Plate Number
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="platenumber"
                  onChange={this.plateNumberChangeHandler}
                  value={this.state.platenumber}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                From Location
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="from_location"
                  onChange={this.fromLocationChangeHandler}
                  value={this.state.fromlocation}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                To Location
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="to_location"
                  onChange={this.toLocationChangeHandler}
                  value={this.state.tolocation}
                />
              </div>
            </div>
            

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3"></div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  type="submit"
                  class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        
        
        
       /* Edit */
       <div
          class={`absolute z-50 bg-gray-900  bottom-0 h-screen w-6/12  lg:w-1/6 sm:w-6/6 md:w-3/5 right-0 ${
            this.state.activeEdit ? "hidden" : null
          }`}
        >
          <img
            onClick={() => this.toggleClassEdit()}
            src="https://image.flaticon.com/icons/png/512/45/45372.png"
            class="float-right cursor-pointer"
            style={{ margin: 15 + "px" }}
            width="35"
            height="35"
          />
          <h1 class="text-white text-center pt-5 font-bold text-lg">
            Edit Driver
          </h1>
          <form onSubmit={this.mySubmitEditHandler} class="w-full max-w-sm p-5">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Device ID
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="deviceid"
                  onChange={this.edit_deviceIdChangeHandler}
                  value={this.state.edit_deviceid}
                />
                <input
                hidden
                value={this.state.edit_uid}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Driver Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="drivername"
                  onChange={this.edit_driverNameChangeHandler}
                  value={this.state.edit_drivername}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Plate Number
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="platenumber"
                  onChange={this.edit_plateNumberChangeHandler}
                  value={this.state.edit_platenumber}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                From Location
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="from_location"
                  onChange={this.edit_fromLocationChangeHandler}
                  value={this.state.edit_fromlocation}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                To Location
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="inline-full-name"
                  autoComplete="off"
                  type="text"
                  name="to_location"
                  onChange={this.edit_toLocationChangeHandler}
                  value={this.state.edit_tolocation}
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3"></div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  type="submit"
                  class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                >
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    );
  }
}
const condition = (authUser) => !!authUser;
export default withFirebase(Drivers);
