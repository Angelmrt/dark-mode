import ThemeToggle from  "./ThemeToggle";

function Header() {
  return (
    <header className="bg-body-bg dark:bg-bodyDARK-bg text-white p-4">
      <ThemeToggle />
    </header>
  )
}

export default Header
