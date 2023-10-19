import { useValue } from "../ButtonContext"
import styles from "./Selector.module.css"
export default function Select(){
  const { setPos } = useValue();

  const handleSelectChange = (e) => {
    setPos(e.target.value);
  };
  return(
    // ========================================Option-Selector===========================================
    <div className={styles.divs}>
      <select className={styles.select} onChange={handleSelectChange}>
        <option value="Top">Top</option>
        <option value="Right">Right</option>
        <option value="Bottom">Bottom</option>
        <option value="Left">Left</option>
      </select>
    </div>
  );
}
