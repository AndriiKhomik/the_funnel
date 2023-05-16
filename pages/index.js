import { useState } from "react";
import Container from "../components/Container";
import styles from "../styles/index.module.css";
import { categories, goals, launchMethod } from "../utils/helpers";
import useLocalStorage from "../hooks/useLocalStorage";

const Index = () => {
  const [setValue] = useLocalStorage("projects", "");
  const [showFrom, setShowForm] = useState(1);
  const [formValues, setFormValues] = useState({
    projectName: "",
    projectUrl: "Alphaguilty.io/",
    categories: [],
    goal: "Understand My Members",
    workers: 0,
    launchMethod: "Pre Product",
    email: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    const { value, checked, name } = e.target;
    if (checked) {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (formValues.email && formValues.workers > 0) {
      setValue((prev) => [...prev, { ...formValues }]);
      setFormValues({
        projectName: "",
        projectUrl: "Alphaguilty.io/",
        categories: [],
        goal: "Understand My Members",
        workers: 0,
        launchMethod: "Pre Product",
        email: "",
      });
      setShowForm(1);
    }
  };

  const handleClickCategory = (e) => {
    if (!formValues.categories.includes(e.target.id)) {
      setFormValues({
        ...formValues,
        categories: [...formValues.categories, e.target.id],
      });
    } else {
      const filteredCategories = formValues.categories.filter(
        (category) => category !== e.target.id
      );
      setFormValues({ ...formValues, categories: filteredCategories });
    }
  };

  const handleDecreaseWorkersCount = (e) => {
    e.preventDefault();
    if (formValues.workers) {
      setFormValues((prev) => ({ ...prev, workers: prev.workers - 1 }));
    }
  };
  const handleIncreaseWorkersCount = (e) => {
    e.preventDefault();
    setFormValues((prev) => ({ ...prev, workers: (prev.workers += 1) }));
  };

  let paintFirstBullet = styles.backgroundBlue;
  let paintFirstStepText = styles.textColorBlue;
  let paintSecondBullet = "";
  let paintSecondStepText = "";
  let paintThirdBullet = "";
  let paintThirdStepText = "";
  let paintFirstLine = styles.backgroundBlue;
  let paintSecondLine = "";

  let displayNone = "";
  if (showFrom === 1) {
    paintFirstBullet = styles.backgroundWhite;
    paintFirstStepText = styles.textColorWhite;
    paintFirstLine = "";
    displayNone = styles.displayNone;
  }
  if (showFrom === 2) {
    paintSecondBullet = styles.backgroundWhite;
    paintSecondStepText = styles.textColorWhite;
  }
  if (showFrom === 3) {
    paintSecondBullet = styles.backgroundBlue;
    paintSecondStepText = styles.textColorBlue;
    paintThirdBullet = styles.backgroundWhite;
    paintThirdStepText = styles.textColorWhite;
    paintSecondLine = styles.backgroundBlue;
  }

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.progress}>
          <div className={styles.progressElementWrapper}>
            <div className={`${styles.circle} ${paintFirstBullet}`}></div>
            <div className={`${styles.text} ${paintFirstStepText}`}>
              Start First Project
            </div>
          </div>
          <div
            className={`${styles.line} ${displayNone} ${paintFirstLine}`}
          ></div>
          <div className={styles.progressElementWrapper}>
            <div className={`${styles.circle} ${paintSecondBullet}`}></div>
            <div className={`${styles.text} ${paintSecondStepText}`}>
              Project Details
            </div>
          </div>
          <div
            className={`${styles.line} ${displayNone} ${paintSecondLine}`}
          ></div>
          <div className={styles.progressElementWrapper}>
            <div className={`${styles.circle} ${paintThirdBullet}`}></div>
            <div className={`${styles.text} ${paintThirdStepText}`}>
              Create Project
            </div>
          </div>
          <div className={styles.bg}></div>
        </div>
        <div className={styles.form}>
          {showFrom == 1 && (
            <>
              <h4 className={styles.subtitle}>
                To Create Quest you need firstly create Project
              </h4>
              <h2 className={styles.title}>Add New Project</h2>
            </>
          )}
          {showFrom == 2 && (
            <>
              <h4 className={styles.subtitle}>Create Project</h4>
              <h2 className={styles.title}>
                What is your main goal with AlphaQuest?
              </h2>
            </>
          )}
          {showFrom == 3 && (
            <>
              <h4 className={styles.subtitle}>Project Details</h4>
              <h2 className={styles.title}>
                How many full-time workers on the project?
              </h2>
            </>
          )}
          <form onSubmit={(e) => e.preventDefault()}>
            {showFrom === 1 && (
              <>
                <label htmlFor="projectName" className={styles.label}>
                  Project Name (It can be changed later)
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="projectName"
                  id="projectName"
                  autoComplete="off"
                  placeholder="Awesome NFT Punch"
                  value={formValues.projectName}
                  onChange={handleChange}
                />
              </>
            )}
            {showFrom === 1 && (
              <>
                <label htmlFor="projectUrl" className={styles.label}>
                  Project URL (It cannot be changed after creation)
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="projectUrl"
                  id="projectUrl"
                  autoComplete="off"
                  placeholder="awesomenftpunch"
                  value={`${formValues.projectUrl}`}
                  onChange={handleChange}
                />
              </>
            )}
            {showFrom === 1 && (
              <>
                <label htmlFor="category" className={styles.label}>
                  Project Category (It cannot be changed after creation)
                </label>
                <div>
                  {categories.map((category) => (
                    <span
                      className={`${styles.category} ${
                        formValues.categories.includes(category.value) &&
                        styles.backgroundBlue
                      }`}
                      id={category.value}
                      key={category.value}
                      onClick={handleClickCategory}
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              </>
            )}
            {showFrom === 2 && (
              <>
                {goals.map((goal) => (
                  <div key={goal.name}>
                    <input
                      type="radio"
                      value={goal.value}
                      onChange={handleCheck}
                      name="goal"
                      checked={formValues.goal === goal.value}
                    />
                    <span className={styles.radio}>{goal.name}</span>
                  </div>
                ))}
              </>
            )}
            {showFrom === 3 && (
              <>
                <div className={styles.workersCountWrapper}>
                  <button
                    className={styles.countBtn}
                    onClick={handleDecreaseWorkersCount}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    disabled
                    value={formValues.workers}
                    className={`${styles.input} ${styles.countInput}`}
                  />
                  <button
                    className={styles.countBtn}
                    onClick={handleIncreaseWorkersCount}
                  >
                    +
                  </button>
                </div>
                <h2 className={styles.title}>
                  Are you pre or post product launch?
                </h2>
                {launchMethod.map((method) => (
                  <div key={method.name}>
                    <input
                      type="radio"
                      value={method.value}
                      onChange={handleCheck}
                      name="launchMethod"
                      checked={formValues.launchMethod === method.value}
                    />
                    <span className={styles.radio}>{method.name}</span>
                  </div>
                ))}
                <h2 className={styles.title}>Contact Email</h2>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="awesomenft@gmail.com"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </>
            )}
            {showFrom === 1 && (
              <button
                className={styles.btnPrimary}
                onClick={(e) => {
                  e.preventDefault;
                  if (
                    formValues.projectName &&
                    formValues.projectUrl.length > 15
                  ) {
                    setShowForm(2);
                  }
                }}
              >
                Add project
              </button>
            )}
            {showFrom !== 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowForm((prev) => prev - 1);
                }}
                className={styles.backBtn}
              >
                Back
              </button>
            )}
            {showFrom === 2 && (
              <button
                onClick={() => setShowForm(3)}
                className={`${styles.btnPrimary} ${styles.btnContinue}`}
              >
                Continue
              </button>
            )}
            {showFrom === 3 && (
              <button
                onClick={handleSubmit}
                className={`${styles.btnPrimary} ${styles.btnContinue}`}
              >
                Create Project
              </button>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Index;
