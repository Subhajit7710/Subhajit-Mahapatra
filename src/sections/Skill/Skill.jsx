import styles from './SkillStyles.module.css'
import checkMarkIcon from '../../assets/assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
function Skill() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        
      </div>
      <hr/>
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="ReactJs"/>
        <SkillList src={checkMarkIcon} skill="Java"/>
        <SkillList src={checkMarkIcon} skill="c++"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Tailwind Css"/>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        <SkillList src={checkMarkIcon} skill="Redux"/>
        </div>
    </section>
  )
}

export default Skill
