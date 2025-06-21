const features = [
  {
    title: "Diagnose CI/CD Failures",
    description: "Instantly identify issues in your pipelines using AI-powered logs analysis.",
  },
  {
    title: "Auto-generate Infrastructure",
    description: "Let Zeus write your infra-as-code scripts and deploy environments effortlessly.",
  },
  {
    title: "Cross-cloud Orchestration",
    description: "Control AWS, Azure, and GCP from one place with a unified CLI.",
  },
  {
    title: "No YAML Needed",
    description: "Forget about manual configs. Let Zeus handle complex setups with natural commands.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#0b0b2b] text-white py-24 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Zeus AI?</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#111132] p-6 rounded-xl border border-indigo-700 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
