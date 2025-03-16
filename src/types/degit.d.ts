declare module 'degit' {
  interface DegitOptions {
    cache?: boolean;
    force?: boolean;
  }

  interface Degit {
    clone(dest: string): Promise<void>;
    on(event: 'info', listener: (info: DegitOptions) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
  }
  function degit(repo: string, options?: DegitOptions): Degit;

  export default degit;
}
