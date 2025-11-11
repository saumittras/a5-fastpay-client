interface SectionTitleProps {
  title: string;
  description: string;
}
const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
