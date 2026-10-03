/** The greeting the web fixture shows, served by this tiny api. */
export function greetingFor(name) {
  return { message: `Hello, ${name}!` };
}

/** The goodbye the web fixture shows, served by this tiny api. */
export function goodbyeFor(name) {
  return { message: `Goodbye, ${name}!` };
}
