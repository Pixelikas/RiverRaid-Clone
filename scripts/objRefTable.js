const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.scrollto.Acts.Shake,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{ScrollTo: 0},
	{CameraPoint: 0},
	{Keyboard: 0},
	{"8Direction": 0},
	{BoundToLayout: 0},
	{CuteShip: 0},
	{Bullet: 0},
	{Enemy: 0},
	{HP: 0},
	{Score: 0}
];

self.InstanceType = {
	CameraPoint: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	CuteShip: class extends self.ISpriteInstance {},
	Bullet: class extends self.ISpriteInstance {},
	Enemy: class extends self.ISpriteInstance {},
	HP: class extends self.ISpriteInstance {},
	Score: class extends self.ITextInstance {}
}