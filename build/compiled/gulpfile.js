"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var gulpclass_1 = require("gulpclass");
var gulp = require("gulp");
var del = require("del");
var shell = require("gulp-shell");
var replace = require("gulp-replace");
var mocha = require("gulp-mocha");
var chai = require("chai");
var tslint = require("gulp-tslint");
var stylish = require("tslint-stylish");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var Gulpfile = /** @class */ (function () {
    function Gulpfile() {
    }
    // -------------------------------------------------------------------------
    // General tasks
    // -------------------------------------------------------------------------
    /**
     * Cleans build folder.
     */
    Gulpfile.prototype.clean = function (cb) {
        return del(["./build/**"], cb);
    };
    /**
     * Runs typescript files compilation.
     */
    Gulpfile.prototype.compile = function () {
        return gulp.src("./package.json", { read: false })
            .pipe(shell(["tsc"]));
    };
    // -------------------------------------------------------------------------
    // Packaging and Publishing tasks
    // -------------------------------------------------------------------------
    /**
     * Publishes a package to npm from ./build/package directory.
     */
    Gulpfile.prototype.npmPublish = function () {
        return gulp.src("./package.json", { read: false })
            .pipe(shell([
            "cd ./build/package && npm publish"
        ]));
    };
    /**
     * Copies all sources to the package directory.
     */
    Gulpfile.prototype.packageCompile = function () {
        var tsProject = ts.createProject("tsconfig.json");
        var tsResult = gulp.src(["src/**/*.ts"])
            .pipe(sourcemaps.init())
            .pipe(tsProject());
        return [
            tsResult.dts.pipe(gulp.dest("build/package")),
            tsResult.js
                .pipe(sourcemaps.write(".", { sourceRoot: "", includeContent: true }))
                .pipe(gulp.dest("build/package"))
        ];
    };
    /**
     * Moves all compiled files to the final package directory.
     */
    Gulpfile.prototype.packageMoveCompiledFiles = function () {
        return gulp.src("./build/package/src/**/*")
            .pipe(gulp.dest("./build/package"));
    };
    /**
     * Moves all compiled files to the final package directory.
     */
    Gulpfile.prototype.packageClearCompileDirectory = function (cb) {
        return del([
            "build/package/src/**"
        ], cb);
    };
    /**
     * Change the "private" state of the packaged package.json file to public.
     */
    Gulpfile.prototype.packagePreparePackageFile = function () {
        return gulp.src("./package.json")
            .pipe(replace("\"private\": true,", "\"private\": false,"))
            .pipe(gulp.dest("./build/package"));
    };
    /**
     * This task will replace all typescript code blocks in the README (since npm does not support typescript syntax
     * highlighting) and copy this README file into the package folder.
     */
    Gulpfile.prototype.packageReadmeFile = function () {
        return gulp.src("./README.md")
            .pipe(replace(/```typescript([\s\S]*?)```/g, "```javascript$1```"))
            .pipe(gulp.dest("./build/package"));
    };
    /**
     * Creates a package that can be published to npm.
     */
    Gulpfile.prototype.package = function () {
        return [
            "clean",
            "packageCompile",
            "packageMoveCompiledFiles",
            "packageClearCompileDirectory",
            ["packagePreparePackageFile", "packageReadmeFile"]
        ];
    };
    /**
     * Creates a package and publishes it to npm.
     */
    Gulpfile.prototype.publish = function () {
        return ["package", "npmPublish"];
    };
    // -------------------------------------------------------------------------
    // Run tests tasks
    // -------------------------------------------------------------------------
    /**
     * Runs ts linting to validate source code.
     */
    Gulpfile.prototype.tslint = function () {
        return gulp.src(["./src/**/*.ts", "./test/**/*.ts", "./sample/**/*.ts"])
            .pipe(tslint())
            .pipe(tslint.report(stylish, {
            emitError: true,
            sort: true,
            bell: true
        }));
    };
    /**
     * Runs unit-tests.
     */
    Gulpfile.prototype.unit = function () {
        chai.should();
        chai.use(require("sinon-chai"));
        return gulp.src("./build/compiled/test/**/*.js")
            .pipe(mocha());
    };
    /**
     * Compiles the code and runs tests.
     */
    Gulpfile.prototype.tests = function () {
        return ["compile", "tslint", "unit"];
    };
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "clean", null);
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "compile", null);
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "npmPublish", null);
    __decorate([
        gulpclass_1.MergedTask(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "packageCompile", null);
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "packageMoveCompiledFiles", null);
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "packageClearCompileDirectory", null);
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "packagePreparePackageFile", null);
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "packageReadmeFile", null);
    __decorate([
        gulpclass_1.SequenceTask(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "package", null);
    __decorate([
        gulpclass_1.SequenceTask(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "publish", null);
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "tslint", null);
    __decorate([
        gulpclass_1.Task(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "unit", null);
    __decorate([
        gulpclass_1.SequenceTask(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Gulpfile.prototype, "tests", null);
    Gulpfile = __decorate([
        gulpclass_1.Gulpclass()
    ], Gulpfile);
    return Gulpfile;
}());
exports.Gulpfile = Gulpfile;
//# sourceMappingURL=gulpfile.js.map