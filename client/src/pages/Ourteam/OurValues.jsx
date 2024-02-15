const OurValues = () => {
  const coreValues = [
    "Excellence: We strive for the highest standards in academics and character development.",
    "Integrity: We uphold honesty, ethics, and doing what is right in all situations.",
    "Respect: We celebrate diversity and treat everyone with dignity and kindness.",
    "Collaboration: We foster teamwork, cooperation, and the sharing of ideas.",
    "Lifelong Learning: We encourage curiosity, critical thinking, and a passion for continuous learning.",
    "Community Engagement: We actively participate in and contribute to our local community.",
    "Innovation: We promote creativity, problem-solving, and forward-thinking.",
    "Leadership: We nurture responsible and ethical leadership qualities in our students.",
    "Empathy: We cultivate understanding and compassion for others' perspectives and feelings.",
    "Environmental Stewardship: We educate students about the importance of preserving our planet and practice sustainable habits.",
  ];

  return (
    <div className="my-10 space-y-6 w-[90%] mx-auto">
      <h1 className=" font-semibold text-center text-textSecondary text-3xl">
        Our values
      </h1>
      <ol className="space-y-2">
        {coreValues.map((value) => (
          <li key={value} className="list-decimal">
            {value}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default OurValues;
