"use strict";function setupCurrentWorkingDirectory(){const e=require("path");try{typeof process.env.VSCODE_CWD!="string"&&(process.env.VSCODE_CWD=process.cwd()),process.platform==="win32"&&process.chdir(e.dirname(process.execPath))}catch(n){console.error(n)}}setupCurrentWorkingDirectory(),exports.injectNodeModuleLookupPath=function(e){if(!e)throw new Error("Missing injectPath");const n=require("module"),a=require("path").join(__dirname,"../node_modules"),l=n._resolveLookupPaths;n._resolveLookupPaths=function(r,o){const s=l(r,o);if(Array.isArray(s)){for(let i=0,p=s.length;i<p;i++)if(s[i]===a){s.splice(i,0,e);break}}return s}},exports.removeGlobalNodeModuleLookupPaths=function(){const e=require("module"),n=e.globalPaths,c=e._resolveLookupPaths;e._resolveLookupPaths=function(a,l){const r=c(a,l);if(Array.isArray(r)){let o=0;for(;o<r.length&&r[r.length-1-o]===n[n.length-1-o];)o++;return r.slice(0,r.length-o)}return r}},exports.configurePortable=function(e){const n=require("fs"),c=require("path"),a=c.dirname(__dirname);function l(t){return process.env.VSCODE_DEV?a:process.platform==="darwin"?t.dirname(t.dirname(t.dirname(a))):t.dirname(t.dirname(a))}function r(t){if(process.env.VSCODE_PORTABLE)return process.env.VSCODE_PORTABLE;if(process.platform==="win32"||process.platform==="linux")return t.join(l(t),"data");const u=e.portable||`${e.applicationName}-portable-data`;return t.join(t.dirname(l(t)),u)}const o=r(c),s=!("target"in e)&&n.existsSync(o),i=c.join(o,"tmp"),p=s&&n.existsSync(i);return s?process.env.VSCODE_PORTABLE=o:delete process.env.VSCODE_PORTABLE,p&&(process.platform==="win32"?(process.env.TMP=i,process.env.TEMP=i):process.env.TMPDIR=i),{portableDataPath:o,isPortable:s}};

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/b7886d7461186a5eac768481578c1d7ca80e2d21/core/bootstrap-node.js.map
