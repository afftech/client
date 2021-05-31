<template>
   <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
            <b-nav-item href="#">Новости</b-nav-item>

            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Контакты завода" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Карта" right>
                <b-dropdown-item href="#">Account</b-dropdown-item>
                <b-dropdown-item href="#">Settings</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>