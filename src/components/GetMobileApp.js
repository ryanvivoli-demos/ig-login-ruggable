import React from 'react';

export const GetMobileApp = props => {   
	return (
		<div className="getApp">
			<p>Get the App.</p>
			<div>
				<a aria-label="Download on the App Store" className="z1VUo" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" tabIndex="0">
					<img alt="Download on the App Store" className="Rt8TI " src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />
				</a>
				<a aria-label="Get it on Google Play" className="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DA578FFF0-BE51-4BDF-B212-F1DA0A96C1E1%26utm_content%3Dlo%26utm_medium%3Dbadge" tabIndex="0">
					<img alt="Get it on Google Play" className="Rt8TI " src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" />
				</a>
			</div>
		</div>
	);
};