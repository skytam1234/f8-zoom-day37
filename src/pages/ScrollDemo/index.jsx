import styles from "./ScrollDemo.module.scss";
import GotoTop from "../../components/GoToTop";
import { useEffect, useState } from "react";
function ScrollDemo() {
    const [isAdd, setIsAdd] = useState(false);
    useEffect(() => {
        const handle = () => {
            if (window.scrollY > 300) {
                setIsAdd(true);
            } else {
                setIsAdd(false);
            }
        };
        window.addEventListener("scroll", handle);
        return () => {
            window.removeEventListener("scroll", handle);
        };
    }, [isAdd]);
    return (
        <div className={styles.list}>
            <GotoTop isAdd={isAdd} />
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
            <div className={styles.item}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque alias facere fuga mollitia sit earum quod. Alias
                cupiditate consectetur perspiciatis enim esse quaerat
                necessitatibus, quasi repellat recusandae quas nesciunt ratione
                saepe. Magni quos aliquam fugit dolore nisi doloribus blanditiis
                tenetur consequatur nobis voluptatibus reiciendis quas,
                molestias consectetur adipisci temporibus, labore accusamus
                deserunt facilis sunt dicta. Cupiditate repudiandae, autem nihil
                totam, nesciunt, quidem ratione voluptatum veritatis culpa dolor
                magnam. Nihil perspiciatis quaerat cupiditate accusamus, labore
                ducimus repudiandae exercitationem debitis blanditiis
                perferendis temporibus dignissimos neque odio distinctio illo
                facere vel rem modi. Animi sint veniam aut recusandae sit
                obcaecati eaque vel? Eveniet!
            </div>
        </div>
    );
}
export default ScrollDemo;
