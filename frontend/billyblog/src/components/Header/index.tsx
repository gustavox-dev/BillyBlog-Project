import { SHeader, MenuList, NavItem } from './styles'

export function Header() {
    return(
        <SHeader>
            <NavItem>
                <MenuList>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </MenuList>
            </NavItem>
        </SHeader>
    )
}