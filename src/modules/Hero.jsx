import Profile from "./Profile";

const Hero = () => {
  return (
    <>
      <div className="App container">
        <h1 className="my-4">Web development Training</h1>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <Profile
              name="Goutam Patroti"
              title="Web development"
              profilepic="./Goutam.jpeg"
            ></Profile>
          </div>
          <div className="col-md-6">
            CEO and Founder of GSP Private Limited, Bagalkot I am a
           
          </div>
        </div>
        {/* <ItemList items={items} /> */}
      </div>
    </>
  );
};
export default Hero;
