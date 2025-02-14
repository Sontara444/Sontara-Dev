import './StatsSection.css';
import { assets } from "../Assets/assets";

const stats = [
  { id: 1, icon: assets.laptop_img, value: '20+', label: 'Completed Projects' },
  { id: 2, icon: assets.trophy_img, value: 'Frontend-React', label: 'Developer' },
  { id: 3, icon: assets.sand_img, value: '2 Years+', label: 'Experience' },
  { id: 4, icon: assets.code_img, value: '50K+', label: 'Lines of Code' },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <img src={stat.icon} alt={stat.label} className="icon" />
              <h3 className="value">{stat.value}</h3>
              <p className="label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
