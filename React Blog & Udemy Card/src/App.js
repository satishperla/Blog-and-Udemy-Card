// import logo from "./logo.svg";
import './App.css';
import profile1 from "./Images/1.jpg";
import profile2 from "./Images/2.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
import UdemyCard from "./UdemyCard";

function App() {
  return (
    // <div className="ui cards">
    //   <UserCard name="Elon Musk">
    //     <SingleComment
    //       name="Elon Musk"
    //       comment="Reactjs"
    //       date="Today at 6:00 PM"
    //       profile={profile1}
    //     />
    //            
    //   </UserCard>
    //   <UserCard name="Jeff">
    //     <SingleComment
    //       name="Jeff"
    //       comment="Angular"
    //       date="Today at 7:00 PM"
    //       profile={profile2}
    //     />
    //   </UserCard>
    // </div>
    <div className='App'>
    <div className="ui five cards">
      <UdemyCard profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahytrwyznaMrALcXHCveJI257NFmgzasEXA&usqp=CAU" count="259"  course="Learn Python from Scratch" price="$229" author="Kumar"></UdemyCard>
      <UdemyCard profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBEIv_YIiArbMG_7MDli1eVd5AJbWy0DFh1gywIYAs9jyVY_CMlzqz6W4VXtn2WPINDE&usqp=CAU"  count="754" course="React for beginners" price="$43" author="John.H"></UdemyCard>
      <UdemyCard profile="https://www.filepicker.io/api/file/nlMKa4JeSBysXoj7pa90" count="2345" course="Complete course for beginers in Node JS" price="$98" author="Raj Kumar"></UdemyCard>
      <UdemyCard profile="https://i.morioh.com/2019/11/01/a41e6401bdd6.jpg" count="87543"  course="Vue JS: Beginners to Advanced course" price="$67" author="Srinivas"></UdemyCard>
      <UdemyCard profile="https://s3.amazonaws.com/coursesity-blog/2021/06/NextJS_App_Classes.png"  count="285" course="Become expertise in Next JS in 30 days" price="$561" author="Satish"></UdemyCard>
      <UdemyCard profile="https://learntypescript.dev/banner.png" course="Complete course for beginers in TypeScript"  count="561" price="$41" author="Joined in 2022"></UdemyCard>
      <UdemyCard profile="https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg"  count="295" course="Complete course for beginers in Node JS" price="$97" author="Jani Basha"></UdemyCard>
      <UdemyCard profile="https://static.javatpoint.com/blog/images/mern-stack.png"  count="712" course="Complete course for beginers in MERN stack" price="$21" author="Henry Ford"></UdemyCard>
    </div>
    </div>
  );
}

export default App;
