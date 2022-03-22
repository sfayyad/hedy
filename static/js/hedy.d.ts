// Some ambient declarations that are generated by other JavaScript files, or
// by JavaScript generated in HTML templates.
declare const ErrorMessages: Record<string, string>;

/**
 * The global state we keep
 *
 * This is in desperate need of cleaning up!!
 */
interface State {
  /**
   * Current language
   */
  readonly lang?: string;

  /**
   * Current level
   */
  readonly level?: string;
  /**
   * Current keyword language
   */
  keyword_language?: string;
  /**
   * Title of current level
   */
  readonly level_title?: string;

  /**
   * ?
   *
   * (Only available in code page)
   */
  adventure_name?: string;

  /**
   * Adventure name at the time the page was loaded.
   *
   * Not affected by switching tabs.
   *
   * (Only available in code page)
   */
  readonly adventure_name_onload?: string;

  readonly adventures?: Adventure[];

  /**
   */
  readonly default_program?: string;

  /**
   */
  readonly loaded_program?: Program;

  /**
   */
  readonly default_program_name?: string;


  disable_run?: boolean;

  unsaved_changes?: boolean;

  no_unload_prompt?: boolean;

  programsInExecution?: integer;
}

declare interface Window {
  State: State;

  editor?: AceAjax.Editor;
}

interface Adventure {
  short_name: string;
  loaded_program?: Program;
  default_save_name: string;
  start_code: string;
}

interface Program {
  name: string;
  code: string;
}
