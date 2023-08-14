import { RootStyleRegistry } from "./root-style-registry";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <RootStyleRegistry>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  )
}
