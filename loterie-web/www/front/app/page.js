// Parent component (Home)
'use client'
import { useState } from 'react'
import { Loteries } from "@/app/components/loteries"
import { AddLottery } from "@/app/components/addLottery"
import { Disconnect } from "@/app/components/loterie/disconnect"
import styles from './page.module.css'

export default function Home() {
    const [refresh, setRefresh] = useState(0)

    const handleAdded = () => {
        setRefresh(prev => prev + 1)
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <i className="fas fa-ticket-alt"></i>
                        <span>LoteriePlus</span>
                    </div>
                    <nav className={styles.navbar}>
                        <a href="#loteries">
                            <i className="fas fa-list"></i>
                            Loteries
                        </a>
                        <a href="#ajouter">
                            <i className="fas fa-plus-circle"></i>
                            Ajouter
                        </a>
                    </nav>
                    <Disconnect />
                </div>
            </header>

            <main className={styles.main}>
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1>Loteries Disponibles</h1>
                        <p>Gérez et participez à vos loteries préférées</p>
                    </div>
                </section>

                <div className={styles.contentWrapper}>
                    <section id="ajouter" className={styles.addSection}>
                        <div className={styles.sectionCard}>
                            <h2>Ajouter une Nouvelle Loterie</h2>
                            <AddLottery onAdded={handleAdded} />
                        </div>
                    </section>

                    <section id="loteries" className={styles.lotariesSection}>
                        <div className={styles.sectionHeader}>
                            <h2>Mes Loteries</h2>
                            <span className={styles.refreshButton} onClick={() => setRefresh(prev => prev + 1)}>
                                ↻ Rafraîchir
                            </span>
                        </div>
                        <Loteries key={refresh} />
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2025 LoteriePlus | Groupe 3 | Iut Paul Sabatier. Tous droits réservés.</p>
            </footer>
        </div>
    )
}