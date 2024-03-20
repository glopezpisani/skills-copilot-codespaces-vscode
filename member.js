function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAd: 'vm',
        bindToController: true,
        scope: {
            member:'='
        }
    };
}