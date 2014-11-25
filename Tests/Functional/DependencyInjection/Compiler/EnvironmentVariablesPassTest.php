<?php

/*
 * This file is part of the ONGR package.
 *
 * (c) NFQ Technologies UAB <info@nfq.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ONGR\AdminBundle\Tests\Functional\DependencyInjection\Compiler;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Integration tests for  EnvironmentVariablesPass.
 */
class EnvironmentVariablesPassTest extends WebTestCase
{
    /**
     * Check if parameters are overrode at the right time. I.E. before container freezes.
     */
    public function testOverriding()
    {
        // First load up the default variables and check if they're set.
        $kernel = self::createClient()->getKernel();
        $container = $kernel->getContainer();

        $this->assertEquals(
            'unchanged_param',
            $container->getParameter('ongr_admin.environment_variables_pass_test_param')
        );

        // Now set an env variable and check if it has changed the default one.
        $_SERVER['ongr__ongr_admin__environment_variables_pass_test_param'] = 'successful_change';
        $kernel = self::createClient(['environment' => 'test_alternative'])->getKernel();
        $container = $kernel->getContainer();

        $this->assertEquals(
            'successful_change',
            $container->getParameter('ongr_admin.environment_variables_pass_test_param')
        );
    }
}