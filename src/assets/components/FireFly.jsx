import "./FireFly.css";

export default function FireflyFooter() {
  return (
    <div className="firefly-footer">
      {/* 12 floating fireflies */}
      {[...Array(40)].map((_, i) => (
        <div key={i} className="firefly"></div>
      ))}
    </div>
  );
}
