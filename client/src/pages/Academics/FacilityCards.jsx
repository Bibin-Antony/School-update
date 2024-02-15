import FacilitiesCard from "../../components/cards/FacilitiesCard";
import Image1 from "../../assets/Images/TransportImages/t1.jpg";
import Image2 from "../../assets/Images/TransportImages/t2.jpeg";
import Image3 from "../../assets/Images/TransportImages/t3.jpeg";

const FacilityCards = () => {
  const data = [
    {
      title: "Transport",
      images: [Image1, Image2, Image3],
      des: "Our safe and reliable transportation services ensure that students can commute to and from school conveniently. We prioritize the safety and comfort of our students during their daily journey to school.",
    },
    {
      title: "Computer Labs",
      images: [],
      des: "Equipped with state-of-the-art computers and software, our computer labs provide students with access to technology for research, coding, programming, and digital learning.",
    },
    {
      title: "Sports Ground",
      images: [],
      des: "Our expansive sports ground offers ample space for various sports and physical activities. It's where students hone their athletic skills, teamwork, and sportsmanship.",
    },
    {
      title: "Classroom",
      images: [],
      des: "Our spacious and well-equipped classrooms are designed to provide an engaging and conducive environment for effective teaching and learning.",
    },
    {
      title: "Science Lab",
      images: [],
      des: "Our science labs are equipped with modern instruments and resources, enabling hands-on experiments and scientific exploration in subjects such as Physics, Chemistry, and Biology.",
    },
    {
      title: "Music and Dance studio",
      images: [],
      des: "The music room is where students discover their musical talents, practice instruments, and explore the world of melody and rhythm.",
    },
    {
      title: "Library",
      images: [],
      des: "Our library houses an extensive collection of books, journals, and digital resources, promoting reading habits and providing valuable research materials.",
    },
    {
      title: "Art studio",
      images: [],
      des: "In our art studio, creativity knows no bounds. Students express themselves through various art forms, fostering their artistic talents.",
    },
  ];

  return (
    <div className="space-y-4 lg:space-y-0 lg:grid grid-cols-2 lg:gap-6">
      {data.map((card) => (
        <FacilitiesCard
          key={card.title}
          title={card.title}
          images={card.images}
          des={card.des}
        />
      ))}
    </div>
  );
};

export default FacilityCards;
