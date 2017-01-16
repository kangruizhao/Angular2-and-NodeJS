/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './header.component';
import * as import11 from '@angular/router/src/directives/router_outlet';
import * as import12 from './errors/error.component';
import * as import13 from './header.component.ngfactory';
import * as import14 from '@angular/router/src/router_outlet_map';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
import * as import16 from './errors/error.component.ngfactory';
import * as import17 from './errors/error.service';
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-app', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new import3.AppComponent();
        this._appEl_0.initComponent(this._AppComponent_0_4, [], compView_0);
        compView_0.create(this._AppComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_AppComponent_Host0;
}(import1.AppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var AppComponentNgFactory = new import9.ComponentFactory('my-app', viewFactory_AppComponent_Host0, import3.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'container');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'app-header', null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import13.viewFactory_HeaderComponent0(this.viewUtils, this.injector(2), this._appEl_2);
        this._HeaderComponent_2_4 = new import10.HeaderComponent();
        this._appEl_2.initComponent(this._HeaderComponent_2_4, [], compView_2);
        compView_2.create(this._HeaderComponent_2_4, [], null);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'hr', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_6 = this.renderer.createElement(this._el_0, 'router-outlet', null);
        this._appEl_6 = new import2.AppElement(6, 0, this, this._el_6);
        this._RouterOutlet_6_5 = new import11.RouterOutlet(this.parentInjector.get(import14.RouterOutletMap), this._appEl_6.vcRef, this.parentInjector.get(import15.ComponentFactoryResolver), null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'app-error', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import16.viewFactory_ErrorComponent0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ErrorComponent_9_4 = new import12.ErrorComponent(this.parentInjector.get(import17.ErrorService));
        this._appEl_9.initComponent(this._ErrorComponent_9_4, [], compView_9);
        compView_9.create(this._ErrorComponent_9_4, [], null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9
        ], [], []);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.HeaderComponent) && (2 === requestNodeIndex))) {
            return this._HeaderComponent_2_4;
        }
        if (((token === import11.RouterOutlet) && (6 === requestNodeIndex))) {
            return this._RouterOutlet_6_5;
        }
        if (((token === import12.ErrorComponent) && (9 === requestNodeIndex))) {
            return this._ErrorComponent_9_4;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ErrorComponent_9_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppComponent0.prototype.destroyInternal = function () {
        this._RouterOutlet_6_5.ngOnDestroy();
    };
    return _View_AppComponent0;
}(import1.AppView));
export function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('F:/Udemy/MEAN/Angular2-and-NodeJS/08 Optimization/assets/app/app.component.html', 0, import8.ViewEncapsulation.None, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map