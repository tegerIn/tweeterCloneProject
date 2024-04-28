import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[5%] px-10 pt-9">
      <div className="flex flex-row justify-center gap-3 text-sm text-neutral-500">
        <div className="a-footer">
          <Link
            href="https://about.twitter.com/en"
            rel="noopener noreferrer"
            target="_blank"
          >
            소개
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://help.twitter.com/en/using-x/download-the-x-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            X 앱 다운로드 하기
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://help.twitter.com/ko"
            rel="noopener noreferrer"
            target="_blank"
          >
            고객센터
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://twitter.com/ko/tos"
            rel="noopener noreferrer"
            target="_blank"
          >
            이용약관
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://twitter.com/ko/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            개인정보 처리방침
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://help.twitter.com/ko/rules-and-policies/x-cookies"
            rel="noopener noreferrer"
            target="_blank"
          >
            쿠키 정책
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://help.twitter.com/ko/resources/accessibility"
            rel="noopener noreferrer"
            target="_blank"
          >
            접근성
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            rel="noopener noreferrer"
            target="_blank"
          >
            광고 정보
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://blog.twitter.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            블로그
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://careers.twitter.com/en"
            rel="noopener noreferrer"
            target="_blank"
          >
            채용
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://about.twitter.com/en/who-we-are/brand-toolkit"
            rel="noopener noreferrer"
            target="_blank"
          >
            브랜드 리소스
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://business.twitter.com/ko/advertising.html?ref=gl-tw-tw-twitter-advertise"
            rel="noopener noreferrer"
            target="_blank"
          >
            광고
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://marketing.twitter.com/ko"
            rel="noopener noreferrer"
            target="_blank"
          >
            마케팅
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
            rel="noopener noreferrer"
            target="_blank"
          >
            비즈니스용X
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://developer.twitter.com/en"
            rel="noopener noreferrer"
            target="_blank"
          >
            개발자
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://twitter.com/i/directory/profiles"
            rel="noopener noreferrer"
            target="_blank"
          >
            디렉터리
          </Link>
        </div>
        <div className="a-footer">
          <Link
            href="https://twitter.com/settings/account/personalization"
            rel="noopener noreferrer"
            target="_blank"
          >
            설정
          </Link>
        </div>
        <div>
          <span>© 2024 X Corp.</span>
        </div>
      </div>
    </footer>
  );
}
