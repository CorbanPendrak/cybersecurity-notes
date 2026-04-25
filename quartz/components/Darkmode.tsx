// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const Darkmode: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "darkmode")}>
      {/* Dark theme icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="themeIcon themeIcon-dark"
        x="0px"
        y="0px"
        viewBox="75 -875 800 800"
        style="enable-background:new 0 0 100 100"
        xmlSpace="preserve"
        aria-label={i18n(cfg.locale).components.themeToggle.darkMode}
      >
        <title>{i18n(cfg.locale).components.themeToggle.darkMode}</title>
        <path d="M600-640 480-760l120-120 120 120-120 120Zm200 120-80-80 80-80 80 80-80 80ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 99 11 193.5T520-521q71 71 165.5 100T879-410q-26 144-138 237T483-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-305Z"/>
        </svg>
      {/* Light theme icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="themeIcon themeIcon-light"
        x="0px"
        y="0px"
        viewBox="75 -875 800 800"
        style="enable-background:new 0 0 100 100"
        xmlSpace="preserve"
        aria-label={i18n(cfg.locale).components.themeToggle.lightMode}
      >
        <title>{i18n(cfg.locale).components.themeToggle.lightMode}</title>
        <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
        </svg>
      {/* Ocean theme icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="themeIcon themeIcon-ocean"
        x="0px"
        y="0px"
        viewBox="75 -875 800 800"
        style="enable-background:new -960 -960 1920 1920"
        xmlSpace="preserve"
        aria-label={i18n(cfg.locale).components.themeToggle.lightMode}
      >
        <path d="M355-102q-64-22-116-60t-85.5-89Q120-302 120-360v-120l160 120-62 62q29 51 92 88t130 47v-357H320v-80h120v-47q-35-13-57.5-43.5T360-760q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 69.5T520-647v47h120v80H520v357q67-10 130-47t92-88l-62-62 160-120v120q0 58-33.5 109T721-162q-52 38-116 60T480-80q-61 0-125-22Zm125-618q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z" />
      </svg>
      {/* Blood theme icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="themeIcon themeIcon-blood"
        x="0px"
        y="0px"
        viewBox="75 -875 800 800"
        style="enable-background:new -960 -960 1920 1920"
        xmlSpace="preserve"
        aria-label={i18n(cfg.locale).components.themeToggle.lightMode}
      >
        <path d="M491-200q12-1 20.5-9.5T520-230q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343-375q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35Zm-239.5 26Q160-268 160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80q-137 0-228.5-94ZM652-230.5Q720-301 720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160q104 0 172-70.5ZM480-480Z"/>
      </svg>
      {/* Hacker theme icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        class="themeIcon themeIcon-hacker"
        x="0px"
        y="0px"
        viewBox="75 -875 800 800"
        style="enable-background:new -960 -960 1920 1920"
        xmlSpace="preserve"
        aria-label={i18n(cfg.locale).components.themeToggle.lightMode}
      >
        <path d="M480-160v-80h320v80H480ZM220-320l-56-56 183-184-183-184 56-56 240 240-240 240Z"/>
      </svg>
    </button>
  )
}

Darkmode.beforeDOMLoaded = darkmodeScript
Darkmode.css = styles

export default (() => Darkmode) satisfies QuartzComponentConstructor
