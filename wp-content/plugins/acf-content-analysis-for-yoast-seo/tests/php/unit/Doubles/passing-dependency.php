<?php

namespace Yoast\WP\ACF\Tests\Doubles;

use Yoast_ACF_Analysis_Dependency;

/**
 * Class Passing_Dependency.
 */
class Passing_Dependency implements Yoast_ACF_Analysis_Dependency {

	/**
	 * Checks if this dependency is met.
	 *
	 * @return bool True when met, false when not met.
	 */
	public function is_met() {
		return true;
	}

	/**
	 * Registers the notifications to communicate the dependency is not met.
	 *
	 * @return void
	 */
	public function register_notifications() {
	}
}
