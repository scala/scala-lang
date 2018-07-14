(function(){
'use strict';
/* Scala.js runtime support
 * Copyright 2013 LAMP/EPFL
 * Author: Sébastien Doeraene
 */

/* ---------------------------------- *
 * The top-level Scala.js environment *
 * ---------------------------------- */





// Get the environment info
const $env = (typeof __ScalaJSEnv === "object" && __ScalaJSEnv) ? __ScalaJSEnv : {};

// Global scope
const $g =
  (typeof $env["global"] === "object" && $env["global"])
    ? $env["global"]
    : ((typeof global === "object" && global && global["Object"] === Object) ? global : this);
$env["global"] = $g;

// Where to send exports



const $e =
  (typeof $env["exportsNamespace"] === "object" && $env["exportsNamespace"])
    ? $env["exportsNamespace"] : $g;

$env["exportsNamespace"] = $e;

// Freeze the environment info
$g["Object"]["freeze"]($env);

// Linking info - must be in sync with scala.scalajs.runtime.LinkingInfo
const $linkingInfo = {
  "envInfo": $env,
  "semantics": {




    "asInstanceOfs": 1,








    "arrayIndexOutOfBounds": 1,










    "moduleInit": 2,





    "strictFloats": false,




    "productionMode": false

  },

  "assumingES6": true,



  "linkerVersion": "0.6.24",
  "globalThis": this
};
$g["Object"]["freeze"]($linkingInfo);
$g["Object"]["freeze"]($linkingInfo["semantics"]);

// Snapshots of builtins and polyfills


const $imul = $g["Math"]["imul"];
const $fround = $g["Math"]["fround"];
const $clz32 = $g["Math"]["clz32"];







































// Other fields




















let $lastIDHash = 0; // last value attributed to an id hash code

const $idHashCodeMap = new $g["WeakMap"]();





// Core mechanism

const $makeIsArrayOfPrimitive = function(primitiveData) {
  return function(obj, depth) {
    return !!(obj && obj.$classData &&
      (obj.$classData.arrayDepth === depth) &&
      (obj.$classData.arrayBase === primitiveData));
  }
};


const $makeAsArrayOfPrimitive = function(isInstanceOfFunction, arrayEncodedName) {
  return function(obj, depth) {
    if (isInstanceOfFunction(obj, depth) || (obj === null))
      return obj;
    else
      $throwArrayCastException(obj, arrayEncodedName, depth);
  }
};


/** Encode a property name for runtime manipulation
  *  Usage:
  *    env.propertyName({someProp:0})
  *  Returns:
  *    "someProp"
  *  Useful when the property is renamed by a global optimizer (like Closure)
  *  but we must still get hold of a string of that name for runtime
  * reflection.
  */
const $propertyName = function(obj) {
  for (const prop in obj)
    return prop;
};

// Runtime functions

const $isScalaJSObject = function(obj) {
  return !!(obj && obj.$classData);
};


const $throwClassCastException = function(instance, classFullName) {




  throw new $c_sjsr_UndefinedBehaviorError().init___jl_Throwable(
    new $c_jl_ClassCastException().init___T(
      instance + " is not an instance of " + classFullName));

};

const $throwArrayCastException = function(instance, classArrayEncodedName, depth) {
  for (; depth; --depth)
    classArrayEncodedName = "[" + classArrayEncodedName;
  $throwClassCastException(instance, classArrayEncodedName);
};



const $throwArrayIndexOutOfBoundsException = function(i) {
  const msg = (i === null) ? null : ("" + i);



  throw new $c_sjsr_UndefinedBehaviorError().init___jl_Throwable(
    new $c_jl_ArrayIndexOutOfBoundsException().init___T(msg));

};


const $noIsInstance = function(instance) {
  throw new $g["TypeError"](
    "Cannot call isInstance() on a Class representing a raw JS trait/object");
};

const $makeNativeArrayWrapper = function(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray);
};

const $newArrayObject = function(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0);
};

const $newArrayObjectInternal = function(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);

  if (lengthIndex < lengths.length-1) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = lengthIndex+1;
    const underlying = result.u;
    for (let i = 0; i < underlying.length; i++) {
      underlying[i] = $newArrayObjectInternal(
        subArrayClassData, lengths, subLengthIndex);
    }
  }

  return result;
};

const $objectToString = function(instance) {
  if (instance === void 0)
    return "undefined";
  else
    return instance.toString();
};

const $objectGetClass = function(instance) {
  switch (typeof instance) {
    case "string":
      return $d_T.getClassOf();
    case "number": {
      const v = instance | 0;
      if (v === instance) { // is the value integral?
        if ($isByte(v))
          return $d_jl_Byte.getClassOf();
        else if ($isShort(v))
          return $d_jl_Short.getClassOf();
        else
          return $d_jl_Integer.getClassOf();
      } else {
        if ($isFloat(instance))
          return $d_jl_Float.getClassOf();
        else
          return $d_jl_Double.getClassOf();
      }
    }
    case "boolean":
      return $d_jl_Boolean.getClassOf();
    case "undefined":
      return $d_sr_BoxedUnit.getClassOf();
    default:
      if (instance === null)
        return instance.getClass__jl_Class();
      else if ($is_sjsr_RuntimeLong(instance))
        return $d_jl_Long.getClassOf();
      else if ($isScalaJSObject(instance))
        return instance.$classData.getClassOf();
      else
        return null; // Exception?
  }
};

const $objectClone = function(instance) {
  if ($isScalaJSObject(instance) || (instance === null))
    return instance.clone__O();
  else
    throw new $c_jl_CloneNotSupportedException().init___();
};

const $objectNotify = function(instance) {
  // final and no-op in java.lang.Object
  if (instance === null)
    instance.notify__V();
};

const $objectNotifyAll = function(instance) {
  // final and no-op in java.lang.Object
  if (instance === null)
    instance.notifyAll__V();
};

const $objectFinalize = function(instance) {
  if ($isScalaJSObject(instance) || (instance === null))
    instance.finalize__V();
  // else no-op
};

const $objectEquals = function(instance, rhs) {
  if ($isScalaJSObject(instance) || (instance === null))
    return instance.equals__O__Z(rhs);
  else if (typeof instance === "number")
    return typeof rhs === "number" && $numberEquals(instance, rhs);
  else
    return instance === rhs;
};

const $numberEquals = function(lhs, rhs) {
  return (lhs === rhs) ? (
    // 0.0.equals(-0.0) must be false
    lhs !== 0 || 1/lhs === 1/rhs
  ) : (
    // are they both NaN?
    (lhs !== lhs) && (rhs !== rhs)
  );
};

const $objectHashCode = function(instance) {
  switch (typeof instance) {
    case "string":
      return $m_sjsr_RuntimeString$().hashCode__T__I(instance);
    case "number":
      return $m_sjsr_Bits$().numberHashCode__D__I(instance);
    case "boolean":
      return instance ? 1231 : 1237;
    case "undefined":
      return 0;
    default:
      if ($isScalaJSObject(instance) || instance === null)
        return instance.hashCode__I();




      else
        return $systemIdentityHashCode(instance);
  }
};

const $comparableCompareTo = function(instance, rhs) {
  switch (typeof instance) {
    case "string":

      $as_T(rhs);

      return instance === rhs ? 0 : (instance < rhs ? -1 : 1);
    case "number":

      $as_jl_Number(rhs);

      return $m_jl_Double$().compare__D__D__I(instance, rhs);
    case "boolean":

      $asBoolean(rhs);

      return instance - rhs; // yes, this gives the right result
    default:
      return instance.compareTo__O__I(rhs);
  }
};

const $charSequenceLength = function(instance) {
  if (typeof(instance) === "string")

    return $uI(instance["length"]);



  else
    return instance.length__I();
};

const $charSequenceCharAt = function(instance, index) {
  if (typeof(instance) === "string")

    return $uI(instance["charCodeAt"](index)) & 0xffff;



  else
    return instance.charAt__I__C(index);
};

const $charSequenceSubSequence = function(instance, start, end) {
  if (typeof(instance) === "string")

    return $as_T(instance["substring"](start, end));



  else
    return instance.subSequence__I__I__jl_CharSequence(start, end);
};

const $booleanBooleanValue = function(instance) {
  if (typeof instance === "boolean") return instance;
  else                               return instance.booleanValue__Z();
};

const $numberByteValue = function(instance) {
  if (typeof instance === "number") return (instance << 24) >> 24;
  else                              return instance.byteValue__B();
};
const $numberShortValue = function(instance) {
  if (typeof instance === "number") return (instance << 16) >> 16;
  else                              return instance.shortValue__S();
};
const $numberIntValue = function(instance) {
  if (typeof instance === "number") return instance | 0;
  else                              return instance.intValue__I();
};
const $numberLongValue = function(instance) {
  if (typeof instance === "number")
    return $m_sjsr_RuntimeLong$().fromDouble__D__sjsr_RuntimeLong(instance);
  else
    return instance.longValue__J();
};
const $numberFloatValue = function(instance) {
  if (typeof instance === "number") return $fround(instance);
  else                              return instance.floatValue__F();
};
const $numberDoubleValue = function(instance) {
  if (typeof instance === "number") return instance;
  else                              return instance.doubleValue__D();
};

const $isNaN = function(instance) {
  return instance !== instance;
};

const $isInfinite = function(instance) {
  return !$g["isFinite"](instance) && !$isNaN(instance);
};

const $doubleToInt = function(x) {
  return (x > 2147483647) ? (2147483647) : ((x < -2147483648) ? -2147483648 : (x | 0));
};

/** Instantiates a JS object with variadic arguments to the constructor. */
const $newJSObjectWithVarargs = function(ctor, args) {
  // This basically emulates the ECMAScript specification for 'new'.
  const instance = $g["Object"]["create"](ctor.prototype);
  const result = ctor["apply"](instance, args);
  switch (typeof result) {
    case "string": case "number": case "boolean": case "undefined": case "symbol":
      return instance;
    default:
      return result === null ? instance : result;
  }
};

const $resolveSuperRef = function(initialProto, propName) {
  const getPrototypeOf = $g["Object"]["getPrototypeOf"];
  const getOwnPropertyDescriptor = $g["Object"]["getOwnPropertyDescriptor"];

  let superProto = getPrototypeOf(initialProto);
  while (superProto !== null) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if (desc !== void 0)
      return desc;
    superProto = getPrototypeOf(superProto);
  }

  return void 0;
};

const $superGet = function(initialProto, self, propName) {
  const desc = $resolveSuperRef(initialProto, propName);
  if (desc !== void 0) {
    const getter = desc["get"];
    if (getter !== void 0)
      return getter["call"](self);
    else
      return desc["value"];
  }
  return void 0;
};

const $superSet = function(initialProto, self, propName, value) {
  const desc = $resolveSuperRef(initialProto, propName);
  if (desc !== void 0) {
    const setter = desc["set"];
    if (setter !== void 0) {
      setter["call"](self, value);
      return void 0;
    }
  }
  throw new $g["TypeError"]("super has no setter '" + propName + "'.");
};







const $propertiesOf = function(obj) {
  const result = [];
  for (const prop in obj)
    result["push"](prop);
  return result;
};

const $systemArraycopy = function(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;


  if (srcPos < 0 || destPos < 0 || length < 0 ||
      (srcPos > ((srcu.length - length) | 0)) ||
      (destPos > ((destu.length - length) | 0))) {
    $throwArrayIndexOutOfBoundsException(null);
  }


  if (srcu !== destu || destPos < srcPos || (((srcPos + length) | 0) < destPos)) {
    for (let i = 0; i < length; i = (i + 1) | 0)
      destu[(destPos + i) | 0] = srcu[(srcPos + i) | 0];
  } else {
    for (let i = (length - 1) | 0; i >= 0; i = (i - 1) | 0)
      destu[(destPos + i) | 0] = srcu[(srcPos + i) | 0];
  }
};

const $systemIdentityHashCode =



  (function(obj) {
    switch (typeof obj) {
      case "string": case "number": case "boolean": case "undefined":
        return $objectHashCode(obj);
      default:
        if (obj === null) {
          return 0;
        } else {
          let hash = $idHashCodeMap["get"](obj);
          if (hash === void 0) {
            hash = ($lastIDHash + 1) | 0;
            $lastIDHash = hash;
            $idHashCodeMap["set"](obj, hash);
          }
          return hash;
        }
    }





















  });

// is/as for hijacked boxed classes (the non-trivial ones)

const $isByte = function(v) {
  return typeof v === "number" && (v << 24 >> 24) === v && 1/v !== 1/-0;
};

const $isShort = function(v) {
  return typeof v === "number" && (v << 16 >> 16) === v && 1/v !== 1/-0;
};

const $isInt = function(v) {
  return typeof v === "number" && (v | 0) === v && 1/v !== 1/-0;
};

const $isFloat = function(v) {



  return typeof v === "number";

};


const $asUnit = function(v) {
  if (v === void 0 || v === null)
    return v;
  else
    $throwClassCastException(v, "scala.runtime.BoxedUnit");
};

const $asBoolean = function(v) {
  if (typeof v === "boolean" || v === null)
    return v;
  else
    $throwClassCastException(v, "java.lang.Boolean");
};

const $asByte = function(v) {
  if ($isByte(v) || v === null)
    return v;
  else
    $throwClassCastException(v, "java.lang.Byte");
};

const $asShort = function(v) {
  if ($isShort(v) || v === null)
    return v;
  else
    $throwClassCastException(v, "java.lang.Short");
};

const $asInt = function(v) {
  if ($isInt(v) || v === null)
    return v;
  else
    $throwClassCastException(v, "java.lang.Integer");
};

const $asFloat = function(v) {
  if ($isFloat(v) || v === null)
    return v;
  else
    $throwClassCastException(v, "java.lang.Float");
};

const $asDouble = function(v) {
  if (typeof v === "number" || v === null)
    return v;
  else
    $throwClassCastException(v, "java.lang.Double");
};


// Unboxes


const $uZ = function(value) {
  return !!$asBoolean(value);
};
const $uB = function(value) {
  return $asByte(value) | 0;
};
const $uS = function(value) {
  return $asShort(value) | 0;
};
const $uI = function(value) {
  return $asInt(value) | 0;
};
const $uJ = function(value) {
  return null === value ? $m_sjsr_RuntimeLong$().Zero$1
                        : $as_sjsr_RuntimeLong(value);
};
const $uF = function(value) {
  /* Here, it is fine to use + instead of fround, because asFloat already
   * ensures that the result is either null or a float.
   */
  return +$asFloat(value);
};
const $uD = function(value) {
  return +$asDouble(value);
};






// TypeArray conversions

const $byteArray2TypedArray = function(value) { return new $g["Int8Array"](value.u); };
const $shortArray2TypedArray = function(value) { return new $g["Int16Array"](value.u); };
const $charArray2TypedArray = function(value) { return new $g["Uint16Array"](value.u); };
const $intArray2TypedArray = function(value) { return new $g["Int32Array"](value.u); };
const $floatArray2TypedArray = function(value) { return new $g["Float32Array"](value.u); };
const $doubleArray2TypedArray = function(value) { return new $g["Float64Array"](value.u); };

const $typedArray2ByteArray = function(value) {
  const arrayClassData = $d_B.getArrayOf();
  return new arrayClassData.constr(new $g["Int8Array"](value));
};
const $typedArray2ShortArray = function(value) {
  const arrayClassData = $d_S.getArrayOf();
  return new arrayClassData.constr(new $g["Int16Array"](value));
};
const $typedArray2CharArray = function(value) {
  const arrayClassData = $d_C.getArrayOf();
  return new arrayClassData.constr(new $g["Uint16Array"](value));
};
const $typedArray2IntArray = function(value) {
  const arrayClassData = $d_I.getArrayOf();
  return new arrayClassData.constr(new $g["Int32Array"](value));
};
const $typedArray2FloatArray = function(value) {
  const arrayClassData = $d_F.getArrayOf();
  return new arrayClassData.constr(new $g["Float32Array"](value));
};
const $typedArray2DoubleArray = function(value) {
  const arrayClassData = $d_D.getArrayOf();
  return new arrayClassData.constr(new $g["Float64Array"](value));
};

// TypeData class





class $TypeData {
constructor() {

  // Runtime support
  this.constr = void 0;
  this.parentData = void 0;
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = void 0;
  this._arrayOf = void 0;
  this.isArrayOf = void 0;

  // java.lang.Class support
  this["name"] = "";
  this["isPrimitive"] = false;
  this["isInterface"] = false;
  this["isArrayClass"] = false;
  this["isRawJSType"] = false;
  this["isInstance"] = void 0;
};




initPrim(

    zero, arrayEncodedName, displayName) {
  // Runtime support
  this.ancestors = {};
  this.componentData = null;
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  this.isArrayOf = function(obj, depth) { return false; };

  // java.lang.Class support
  this["name"] = displayName;
  this["isPrimitive"] = true;
  this["isInstance"] = function(obj) { return false; };

  return this;
};




initClass(

    internalNameObj, isInterface, fullName,
    ancestors, isRawJSType, parentData, isInstance, isArrayOf) {
  const internalName = $propertyName(internalNameObj);

  isInstance = isInstance || function(obj) {
    return !!(obj && obj.$classData && obj.$classData.ancestors[internalName]);
  };

  isArrayOf = isArrayOf || function(obj, depth) {
    return !!(obj && obj.$classData && (obj.$classData.arrayDepth === depth)
      && obj.$classData.arrayBase.ancestors[internalName])
  };

  // Runtime support
  this.parentData = parentData;
  this.ancestors = ancestors;
  this.arrayEncodedName = "L"+fullName+";";
  this.isArrayOf = isArrayOf;

  // java.lang.Class support
  this["name"] = fullName;
  this["isInterface"] = isInterface;
  this["isRawJSType"] = !!isRawJSType;
  this["isInstance"] = isInstance;

  return this;
};




initArray(

    componentData) {
  // The constructor

  const componentZero0 = componentData.zero;

  // The zero for the Long runtime representation
  // is a special case here, since the class has not
  // been defined yet, when this file is read
  const componentZero = (componentZero0 == "longZero")
    ? $m_sjsr_RuntimeLong$().Zero$1
    : componentZero0;






































  class ArrayClass extends $c_O {
    constructor(arg) {
      super();
      if (typeof(arg) === "number") {
        // arg is the length of the array
        this.u = new Array(arg);
        for (let i = 0; i < arg; i++)
          this.u[i] = componentZero;
      } else {
        // arg is a native array that we wrap
        this.u = arg;
      }
    };


    get(i) {
      if (i < 0 || i >= this.u.length)
        $throwArrayIndexOutOfBoundsException(i);
      return this.u[i];
    };
    set(i, v) {
      if (i < 0 || i >= this.u.length)
        $throwArrayIndexOutOfBoundsException(i);
      this.u[i] = v;
    };


    clone__O() {
      if (this.u instanceof Array)
        return new ArrayClass(this.u["slice"](0));
      else
        // The underlying Array is a TypedArray
        return new ArrayClass(new this.u.constructor(this.u));
    };
  };


  ArrayClass.prototype.$classData = this;

  // Don't generate reflective call proxies. The compiler special cases
  // reflective calls to methods on scala.Array

  // The data

  const encodedName = "[" + componentData.arrayEncodedName;
  const componentBase = componentData.arrayBase || componentData;
  const arrayDepth = componentData.arrayDepth + 1;

  const isInstance = function(obj) {
    return componentBase.isArrayOf(obj, arrayDepth);
  }

  // Runtime support
  this.constr = ArrayClass;
  this.parentData = $d_O;
  this.ancestors = {O: 1, jl_Cloneable: 1, Ljava_io_Serializable: 1};
  this.componentData = componentData;
  this.arrayBase = componentBase;
  this.arrayDepth = arrayDepth;
  this.zero = null;
  this.arrayEncodedName = encodedName;
  this._classOf = undefined;
  this._arrayOf = undefined;
  this.isArrayOf = undefined;

  // java.lang.Class support
  this["name"] = encodedName;
  this["isPrimitive"] = false;
  this["isInterface"] = false;
  this["isArrayClass"] = true;
  this["isInstance"] = isInstance;

  return this;
};




getClassOf() {

  if (!this._classOf)
    this._classOf = new $c_jl_Class().init___jl_ScalaJSClassData(this);
  return this._classOf;
};




getArrayOf() {

  if (!this._arrayOf)
    this._arrayOf = new $TypeData().initArray(this);
  return this._arrayOf;
};

// java.lang.Class support




"getFakeInstance"() {

  if (this === $d_T)
    return "some string";
  else if (this === $d_jl_Boolean)
    return false;
  else if (this === $d_jl_Byte ||
           this === $d_jl_Short ||
           this === $d_jl_Integer ||
           this === $d_jl_Float ||
           this === $d_jl_Double)
    return 0;
  else if (this === $d_jl_Long)
    return $m_sjsr_RuntimeLong$().Zero$1;
  else if (this === $d_sr_BoxedUnit)
    return void 0;
  else
    return {$classData: this};
};




"getSuperclass"() {

  return this.parentData ? this.parentData.getClassOf() : null;
};




"getComponentType"() {

  return this.componentData ? this.componentData.getClassOf() : null;
};




"newArrayOfThisClass"(lengths) {

  let arrayClassData = this;
  for (let i = 0; i < lengths.length; i++)
    arrayClassData = arrayClassData.getArrayOf();
  return $newArrayObject(arrayClassData, lengths);
};

};


// Create primitive types

const $d_V = new $TypeData().initPrim(undefined, "V", "void");
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean");
const $d_C = new $TypeData().initPrim(0, "C", "char");
const $d_B = new $TypeData().initPrim(0, "B", "byte");
const $d_S = new $TypeData().initPrim(0, "S", "short");
const $d_I = new $TypeData().initPrim(0, "I", "int");
const $d_J = new $TypeData().initPrim("longZero", "J", "long");
const $d_F = new $TypeData().initPrim(0.0, "F", "float");
const $d_D = new $TypeData().initPrim(0.0, "D", "double");

// Instance tests for array of primitives

const $isArrayOf_Z = $makeIsArrayOfPrimitive($d_Z);
$d_Z.isArrayOf = $isArrayOf_Z;

const $isArrayOf_C = $makeIsArrayOfPrimitive($d_C);
$d_C.isArrayOf = $isArrayOf_C;

const $isArrayOf_B = $makeIsArrayOfPrimitive($d_B);
$d_B.isArrayOf = $isArrayOf_B;

const $isArrayOf_S = $makeIsArrayOfPrimitive($d_S);
$d_S.isArrayOf = $isArrayOf_S;

const $isArrayOf_I = $makeIsArrayOfPrimitive($d_I);
$d_I.isArrayOf = $isArrayOf_I;

const $isArrayOf_J = $makeIsArrayOfPrimitive($d_J);
$d_J.isArrayOf = $isArrayOf_J;

const $isArrayOf_F = $makeIsArrayOfPrimitive($d_F);
$d_F.isArrayOf = $isArrayOf_F;

const $isArrayOf_D = $makeIsArrayOfPrimitive($d_D);
$d_D.isArrayOf = $isArrayOf_D;


// asInstanceOfs for array of primitives
const $asArrayOf_Z = $makeAsArrayOfPrimitive($isArrayOf_Z, "Z");
const $asArrayOf_C = $makeAsArrayOfPrimitive($isArrayOf_C, "C");
const $asArrayOf_B = $makeAsArrayOfPrimitive($isArrayOf_B, "B");
const $asArrayOf_S = $makeAsArrayOfPrimitive($isArrayOf_S, "S");
const $asArrayOf_I = $makeAsArrayOfPrimitive($isArrayOf_I, "I");
const $asArrayOf_J = $makeAsArrayOfPrimitive($isArrayOf_J, "J");
const $asArrayOf_F = $makeAsArrayOfPrimitive($isArrayOf_F, "F");
const $asArrayOf_D = $makeAsArrayOfPrimitive($isArrayOf_D, "D");

const $is_Lorg_scalalang_utils_OS = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalalang_utils_OS)))
});
const $as_Lorg_scalalang_utils_OS = (function(obj) {
  return (($is_Lorg_scalalang_utils_OS(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalalang.utils.OS"))
});
const $isArrayOf_Lorg_scalalang_utils_OS = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalalang_utils_OS)))
});
const $asArrayOf_Lorg_scalalang_utils_OS = (function(obj, depth) {
  return (($isArrayOf_Lorg_scalalang_utils_OS(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalalang.utils.OS;", depth))
});
class $c_O {
  init___() {
    return this
  };
  toString__T() {
    const jsx$2 = $objectGetClass(this).getName__T();
    const i = this.hashCode__I();
    const x = $uD((i >>> 0));
    const jsx$1 = x.toString(16);
    return ((jsx$2 + "@") + $as_T(jsx$1))
  };
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  "toString"() {
    return this.toString__T()
  };
}
const $is_O = (function(obj) {
  return (obj !== null)
});
const $as_O = (function(obj) {
  return obj
});
const $isArrayOf_O = (function(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
});
const $asArrayOf_O = (function(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
});
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
class $c_Lorg_querki_jquery_package$ extends $c_O {
  constructor() {
    super();
    this.$$$1 = null
  };
  init___() {
    $n_Lorg_querki_jquery_package$ = this;
    this.$$$1 = $g.$;
    return this
  };
  f02EventHandler__F0__sjs_js_$bar(func) {
    const a = (function(f) {
      return (function() {
        return f.apply__O()
      })
    })(func);
    return a
  };
}
const $d_Lorg_querki_jquery_package$ = new $TypeData().initClass({
  Lorg_querki_jquery_package$: 0
}, false, "org.querki.jquery.package$", {
  Lorg_querki_jquery_package$: 1,
  O: 1
});
$c_Lorg_querki_jquery_package$.prototype.$classData = $d_Lorg_querki_jquery_package$;
let $n_Lorg_querki_jquery_package$ = (void 0);
const $m_Lorg_querki_jquery_package$ = (function() {
  if ((!$n_Lorg_querki_jquery_package$)) {
    $n_Lorg_querki_jquery_package$ = new $c_Lorg_querki_jquery_package$().init___()
  };
  return $n_Lorg_querki_jquery_package$
});
class $c_Lorg_scalajs_dom_package$ extends $c_O {
  constructor() {
    super();
    this.ApplicationCache$1 = null;
    this.Blob$1 = null;
    this.BlobPropertyBag$1 = null;
    this.ClipboardEventInit$1 = null;
    this.DOMException$1 = null;
    this.Event$1 = null;
    this.EventException$1 = null;
    this.EventSource$1 = null;
    this.FileReader$1 = null;
    this.FormData$1 = null;
    this.KeyboardEvent$1 = null;
    this.MediaError$1 = null;
    this.MutationEvent$1 = null;
    this.MutationObserverInit$1 = null;
    this.Node$1 = null;
    this.NodeFilter$1 = null;
    this.PerformanceNavigation$1 = null;
    this.PositionError$1 = null;
    this.Range$1 = null;
    this.TextEvent$1 = null;
    this.TextTrack$1 = null;
    this.URL$1 = null;
    this.VisibilityState$1 = null;
    this.WebSocket$1 = null;
    this.WheelEvent$1 = null;
    this.XMLHttpRequest$1 = null;
    this.XPathResult$1 = null;
    this.window$1 = null;
    this.document$1 = null;
    this.console$1 = null;
    this.bitmap$0$1 = 0
  };
  init___() {
    return this
  };
  console$lzycompute__p1__Lorg_scalajs_dom_raw_Console() {
    if (((536870912 & this.bitmap$0$1) === 0)) {
      this.console$1 = this.window__Lorg_scalajs_dom_raw_Window().console;
      this.bitmap$0$1 = (536870912 | this.bitmap$0$1)
    };
    return this.console$1
  };
  document__Lorg_scalajs_dom_raw_HTMLDocument() {
    return (((268435456 & this.bitmap$0$1) === 0) ? this.document$lzycompute__p1__Lorg_scalajs_dom_raw_HTMLDocument() : this.document$1)
  };
  window__Lorg_scalajs_dom_raw_Window() {
    return (((134217728 & this.bitmap$0$1) === 0) ? this.window$lzycompute__p1__Lorg_scalajs_dom_raw_Window() : this.window$1)
  };
  window$lzycompute__p1__Lorg_scalajs_dom_raw_Window() {
    if (((134217728 & this.bitmap$0$1) === 0)) {
      this.window$1 = $g.window;
      this.bitmap$0$1 = (134217728 | this.bitmap$0$1)
    };
    return this.window$1
  };
  document$lzycompute__p1__Lorg_scalajs_dom_raw_HTMLDocument() {
    if (((268435456 & this.bitmap$0$1) === 0)) {
      this.document$1 = this.window__Lorg_scalajs_dom_raw_Window().document;
      this.bitmap$0$1 = (268435456 | this.bitmap$0$1)
    };
    return this.document$1
  };
  console__Lorg_scalajs_dom_raw_Console() {
    return (((536870912 & this.bitmap$0$1) === 0) ? this.console$lzycompute__p1__Lorg_scalajs_dom_raw_Console() : this.console$1)
  };
}
const $d_Lorg_scalajs_dom_package$ = new $TypeData().initClass({
  Lorg_scalajs_dom_package$: 0
}, false, "org.scalajs.dom.package$", {
  Lorg_scalajs_dom_package$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_package$.prototype.$classData = $d_Lorg_scalajs_dom_package$;
let $n_Lorg_scalajs_dom_package$ = (void 0);
const $m_Lorg_scalajs_dom_package$ = (function() {
  if ((!$n_Lorg_scalajs_dom_package$)) {
    $n_Lorg_scalajs_dom_package$ = new $c_Lorg_scalajs_dom_package$().init___()
  };
  return $n_Lorg_scalajs_dom_package$
});
class $c_Lorg_scalalang_DownloadLinks$ extends $c_O {
  constructor() {
    super();
    this.logger$1 = null
  };
  init___() {
    $n_Lorg_scalalang_DownloadLinks$ = this;
    this.logger$1 = $m_Lorg_scalalang_utils_Logger$().apply__T__Lorg_scalalang_utils_LoggerUtil__Lorg_scalalang_utils_Logger($d_Lorg_scalalang_DownloadLinks$.getClassOf().getName__T(), $m_Lorg_scalalang_utils_RootLogger$());
    return this
  };
  setupMainDownload__p1__V() {
    const this$7 = $m_s_Option$().apply__O__s_Option((0, $m_Lorg_querki_jquery_package$().$$$1)(".main-download"));
    let jsx$1;
    if (this$7.isEmpty__Z()) {
      jsx$1 = true
    } else {
      const arg1 = this$7.get__O();
      jsx$1 = ($uI(arg1.length) > 0)
    };
    let this$8;
    if (jsx$1) {
      this$8 = this$7
    } else {
      this$8 = $m_s_None$()
    };
    if ((!this$8.isEmpty__Z())) {
      this$8.get__O();
      const osLabel = $m_Lorg_scalalang_utils_OS$().apply__Lorg_scalalang_utils_OS().label__T();
      const jsx$4 = $m_Lorg_querki_jquery_package$().$$$1;
      const a = ("#intellij-" + osLabel);
      const jsx$3 = jsx$4(a);
      const jsx$2 = jsx$3.text();
      const intelliJlink = $as_T(jsx$2);
      const jsx$7 = $m_Lorg_querki_jquery_package$().$$$1;
      const a$1 = ("#sbt-" + osLabel);
      const jsx$6 = jsx$7(a$1);
      const jsx$5 = jsx$6.text();
      const sbtLink = $as_T(jsx$5);
      const jsx$10 = $m_Lorg_querki_jquery_package$().$$$1;
      const a$2 = ("#stepOne-" + osLabel);
      const jsx$9 = jsx$10(a$2);
      const jsx$8 = jsx$9.html();
      const stepOneContent = $as_T(jsx$8);
      (0, $m_Lorg_querki_jquery_package$().$$$1)("#download-intellij-link").attr("href", intelliJlink);
      (0, $m_Lorg_querki_jquery_package$().$$$1)("#download-sbt-link").attr("href", sbtLink);
      (0, $m_Lorg_querki_jquery_package$().$$$1)("#download-step-one").html(stepOneContent)
    }
  };
  apply__V() {
    this.setupBinariesElement__p1__V();
    this.setupMainDownload__p1__V()
  };
  setupBinariesElement__p1__V() {
    const this$7 = $m_s_Option$().apply__O__s_Option((0, $m_Lorg_querki_jquery_package$().$$$1)("#download-binaries"));
    let jsx$1;
    if (this$7.isEmpty__Z()) {
      jsx$1 = true
    } else {
      const arg1 = this$7.get__O();
      jsx$1 = ($uI(arg1.length) > 0)
    };
    let this$8;
    if (jsx$1) {
      this$8 = this$7
    } else {
      this$8 = $m_s_None$()
    };
    if ((!this$8.isEmpty__Z())) {
      const arg1$1 = this$8.get__O();
      const os = $m_Lorg_scalalang_utils_OS$().apply__Lorg_scalalang_utils_OS();
      const osLabel = os.label__T();
      let anchor = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("#link-main-unixsys");
      const x$2 = $m_Lorg_scalalang_utils_OS$Windows$();
      if (((os !== null) && (os === x$2))) {
        anchor = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("#link-main-windows")
      };
      if ((anchor === null)) {
        anchor = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("#link-main-one4all")
      };
      const link = $as_T(anchor.getAttribute("href"));
      arg1$1.attr("href", link).addClass(osLabel);
      (0, $m_Lorg_querki_jquery_package$().$$$1)("#users-os").text(osLabel)
    }
  };
}
const $d_Lorg_scalalang_DownloadLinks$ = new $TypeData().initClass({
  Lorg_scalalang_DownloadLinks$: 0
}, false, "org.scalalang.DownloadLinks$", {
  Lorg_scalalang_DownloadLinks$: 1,
  O: 1
});
$c_Lorg_scalalang_DownloadLinks$.prototype.$classData = $d_Lorg_scalalang_DownloadLinks$;
let $n_Lorg_scalalang_DownloadLinks$ = (void 0);
const $m_Lorg_scalalang_DownloadLinks$ = (function() {
  if ((!$n_Lorg_scalalang_DownloadLinks$)) {
    $n_Lorg_scalalang_DownloadLinks$ = new $c_Lorg_scalalang_DownloadLinks$().init___()
  };
  return $n_Lorg_scalalang_DownloadLinks$
});
class $c_Lorg_scalalang_FunctionsApp$ extends $c_O {
  constructor() {
    super();
    this.logger$1 = null
  };
  init___() {
    $n_Lorg_scalalang_FunctionsApp$ = this;
    const this$1 = $m_Lorg_scalalang_utils_RootLogger$();
    this$1.logLevel$1 = $m_Lorg_scalalang_utils_Logger$Level$().Trace$1;
    this.logger$1 = $m_Lorg_scalalang_utils_Logger$().apply__T__Lorg_scalalang_utils_LoggerUtil__Lorg_scalalang_utils_Logger($d_Lorg_scalalang_FunctionsApp$.getClassOf().getName__T(), $m_Lorg_scalalang_utils_RootLogger$());
    return this
  };
  org$scalalang$FunctionsApp$$$anonfun$main$1__O() {
    const this$4 = $m_Lorg_scalalang_FunctionsApp$().logger$1;
    const message = new $c_sjsr_AnonFunction0().init___sjs_js_Function0((function($this) {
      return (function() {
        return "Dom Ready"
      })
    })(this));
    const array = [];
    const optionalMessages = new $c_sjs_js_WrappedArray().init___sjs_js_Array(array);
    this$4.internalLog__F2__I__F0__sc_Seq__V(new $c_sjsr_AnonFunction2().init___sjs_js_Function2((function($this$1) {
      return (function(message$2$2, optionalParams$2) {
        const optionalParams = $as_sc_Seq(optionalParams$2);
        const jsx$1 = $m_Lorg_scalajs_dom_package$().console__Lorg_scalajs_dom_raw_Console();
        const jsx$4 = jsx$1.log;
        const this$6 = $m_sjsr_Compat$();
        let jsx$3;
        if ($is_sjs_js_ArrayOps(optionalParams)) {
          const x2 = $as_sjs_js_ArrayOps(optionalParams);
          jsx$3 = x2.scala$scalajs$js$ArrayOps$$array$f
        } else if ($is_sjs_js_WrappedArray(optionalParams)) {
          const x3 = $as_sjs_js_WrappedArray(optionalParams);
          jsx$3 = x3.array$6
        } else {
          const result = [];
          optionalParams.foreach__F1__V(new $c_sjsr_AnonFunction1().init___sjs_js_Function1((function($this$2, result$1) {
            return (function(x$2) {
              return $uI(result$1.push(x$2))
            })
          })(this$6, result)));
          jsx$3 = result
        };
        const jsx$2 = [message$2$2].concat(jsx$3);
        jsx$4.apply(jsx$1, jsx$2)
      })
    })(this$4)), $m_Lorg_scalalang_utils_Logger$Level$().Trace$1, message, optionalMessages);
    $m_Lorg_scalalang_DownloadLinks$().apply__V();
    $m_Lorg_scalalang_PositionMarker$().apply__V()
  };
  main__AT__V(args) {
    (0, $m_Lorg_querki_jquery_package$().$$$1)($m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument()).ready((function() {
      return $m_Lorg_scalalang_FunctionsApp$().org$scalalang$FunctionsApp$$$anonfun$main$1__O()
    }))
  };
}
const $d_Lorg_scalalang_FunctionsApp$ = new $TypeData().initClass({
  Lorg_scalalang_FunctionsApp$: 0
}, false, "org.scalalang.FunctionsApp$", {
  Lorg_scalalang_FunctionsApp$: 1,
  O: 1
});
$c_Lorg_scalalang_FunctionsApp$.prototype.$classData = $d_Lorg_scalalang_FunctionsApp$;
let $n_Lorg_scalalang_FunctionsApp$ = (void 0);
const $m_Lorg_scalalang_FunctionsApp$ = (function() {
  if ((!$n_Lorg_scalalang_FunctionsApp$)) {
    $n_Lorg_scalalang_FunctionsApp$ = new $c_Lorg_scalalang_FunctionsApp$().init___()
  };
  return $n_Lorg_scalalang_FunctionsApp$
});
class $c_Lorg_scalalang_PositionMarker$ extends $c_O {
  constructor() {
    super();
    this.imageWidth$1 = 0;
    this.targetX$1 = 0;
    this.targetY$1 = 0
  };
  init___() {
    this.imageWidth$1 = 1680;
    this.targetX$1 = 1028;
    this.targetY$1 = 290;
    return this
  };
  updatePointer__p1__Lorg_querki_jquery_JQuery__F0(pointer) {
    return new $c_sjsr_AnonFunction0().init___sjs_js_Function0((function($this, pointer$1) {
      return (function() {
        const windowWidth = $uD((0, $m_Lorg_querki_jquery_package$().$$$1)($m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window()).width());
        const xScale = (windowWidth / $m_Lorg_scalalang_PositionMarker$().imageWidth$1);
        const a = $doubleToInt(($m_Lorg_scalalang_PositionMarker$().targetX$1 * xScale));
        pointer$1.css("left", a)
      })
    })(this, pointer))
  };
  apply__V() {
    const this$7 = $m_s_Option$().apply__O__s_Option((0, $m_Lorg_querki_jquery_package$().$$$1)("#position-marker"));
    let jsx$1;
    if (this$7.isEmpty__Z()) {
      jsx$1 = true
    } else {
      const arg1 = this$7.get__O();
      jsx$1 = ($uI(arg1.length) > 0)
    };
    let this$8;
    if (jsx$1) {
      this$8 = this$7
    } else {
      this$8 = $m_s_None$()
    };
    if ((!this$8.isEmpty__Z())) {
      const arg1$1 = this$8.get__O();
      const updater = $m_Lorg_scalalang_PositionMarker$().updatePointer__p1__Lorg_querki_jquery_JQuery__F0(arg1$1);
      (0, $m_Lorg_querki_jquery_package$().$$$1)($m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window()).resize($m_Lorg_querki_jquery_package$().f02EventHandler__F0__sjs_js_$bar(updater));
      const a = $m_Lorg_scalalang_PositionMarker$().targetY$1;
      arg1$1.css("top", a);
      updater.apply__O()
    }
  };
}
const $d_Lorg_scalalang_PositionMarker$ = new $TypeData().initClass({
  Lorg_scalalang_PositionMarker$: 0
}, false, "org.scalalang.PositionMarker$", {
  Lorg_scalalang_PositionMarker$: 1,
  O: 1
});
$c_Lorg_scalalang_PositionMarker$.prototype.$classData = $d_Lorg_scalalang_PositionMarker$;
let $n_Lorg_scalalang_PositionMarker$ = (void 0);
const $m_Lorg_scalalang_PositionMarker$ = (function() {
  if ((!$n_Lorg_scalalang_PositionMarker$)) {
    $n_Lorg_scalalang_PositionMarker$ = new $c_Lorg_scalalang_PositionMarker$().init___()
  };
  return $n_Lorg_scalalang_PositionMarker$
});
class $c_Lorg_scalalang_utils_Logger$ extends $c_O {
  init___() {
    return this
  };
  apply__T__Lorg_scalalang_utils_LoggerUtil__Lorg_scalalang_utils_Logger(prefix, parentLogger) {
    return new $c_Lorg_scalalang_utils_Logger().init___T__Lorg_scalalang_utils_LoggerUtil((prefix + ":\t"), parentLogger)
  };
}
const $d_Lorg_scalalang_utils_Logger$ = new $TypeData().initClass({
  Lorg_scalalang_utils_Logger$: 0
}, false, "org.scalalang.utils.Logger$", {
  Lorg_scalalang_utils_Logger$: 1,
  O: 1
});
$c_Lorg_scalalang_utils_Logger$.prototype.$classData = $d_Lorg_scalalang_utils_Logger$;
let $n_Lorg_scalalang_utils_Logger$ = (void 0);
const $m_Lorg_scalalang_utils_Logger$ = (function() {
  if ((!$n_Lorg_scalalang_utils_Logger$)) {
    $n_Lorg_scalalang_utils_Logger$ = new $c_Lorg_scalalang_utils_Logger$().init___()
  };
  return $n_Lorg_scalalang_utils_Logger$
});
class $c_Lorg_scalalang_utils_Logger$Level$ extends $c_O {
  constructor() {
    super();
    this.Error$1 = 0;
    this.Warn$1 = 0;
    this.Info$1 = 0;
    this.Debug$1 = 0;
    this.Trace$1 = 0
  };
  init___() {
    this.Error$1 = 1;
    this.Warn$1 = 3;
    this.Info$1 = 5;
    this.Debug$1 = 7;
    this.Trace$1 = 9;
    return this
  };
}
const $d_Lorg_scalalang_utils_Logger$Level$ = new $TypeData().initClass({
  Lorg_scalalang_utils_Logger$Level$: 0
}, false, "org.scalalang.utils.Logger$Level$", {
  Lorg_scalalang_utils_Logger$Level$: 1,
  O: 1
});
$c_Lorg_scalalang_utils_Logger$Level$.prototype.$classData = $d_Lorg_scalalang_utils_Logger$Level$;
let $n_Lorg_scalalang_utils_Logger$Level$ = (void 0);
const $m_Lorg_scalalang_utils_Logger$Level$ = (function() {
  if ((!$n_Lorg_scalalang_utils_Logger$Level$)) {
    $n_Lorg_scalalang_utils_Logger$Level$ = new $c_Lorg_scalalang_utils_Logger$Level$().init___()
  };
  return $n_Lorg_scalalang_utils_Logger$Level$
});
class $c_Lorg_scalalang_utils_OS$ extends $c_O {
  constructor() {
    super();
    this.logger$1 = null
  };
  init___() {
    $n_Lorg_scalalang_utils_OS$ = this;
    this.logger$1 = $m_Lorg_scalalang_utils_Logger$().apply__T__Lorg_scalalang_utils_LoggerUtil__Lorg_scalalang_utils_Logger($d_Lorg_scalalang_utils_OS$.getClassOf().getName__T(), $m_Lorg_scalalang_utils_RootLogger$());
    return this
  };
  apply__Lorg_scalalang_utils_OS() {
    const appVersion = $as_T($m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().navigator.appVersion);
    const $default = $m_Lorg_scalalang_utils_OS$Linux$();
    const array = [$m_Lorg_scalalang_utils_OS$Windows$(), $m_Lorg_scalalang_utils_OS$Mac$(), $m_Lorg_scalalang_utils_OS$Linux$(), $m_Lorg_scalalang_utils_OS$Unix$()];
    const xs = new $c_sjs_js_WrappedArray().init___sjs_js_Array(array);
    const len = $uI(xs.array$6.length);
    const array$1 = $newArrayObject($d_s_Product.getArrayOf(), [len]);
    let elem$1 = 0;
    elem$1 = 0;
    const this$6 = new $c_sc_IndexedSeqLike$Elements().init___sc_IndexedSeqLike__I__I(xs, 0, $uI(xs.array$6.length));
    while (this$6.hasNext__Z()) {
      const arg1 = this$6.next__O();
      array$1.set(elem$1, arg1);
      elem$1 = ((1 + elem$1) | 0)
    };
    let start = 0;
    const end = array$1.u.length;
    let z = $default;
    let start$1 = start;
    let z$1 = z;
    let jsx$1;
    _foldl: while (true) {
      if ((start$1 !== end)) {
        const temp$start = ((1 + start$1) | 0);
        const arg1$1 = z$1;
        const index = start$1;
        const arg2 = array$1.get(index);
        const last = $as_Lorg_scalalang_utils_OS(arg1$1);
        const os = $as_Lorg_scalalang_utils_OS(arg2);
        const s = os.navigator__T();
        let temp$z;
        if (($uI(appVersion.indexOf(s)) !== (-1))) {
          temp$z = os
        } else {
          temp$z = last
        };
        start$1 = temp$start;
        z$1 = temp$z;
        continue _foldl
      };
      jsx$1 = z$1;
      break
    };
    const os$3 = $as_Lorg_scalalang_utils_OS(jsx$1);
    const this$16 = this.logger$1;
    const message = new $c_sjsr_AnonFunction0().init___sjs_js_Function0((function(this$2$1, os$3$1) {
      return (function() {
        const s$1 = ("OS: " + os$3$1);
        return s$1
      })
    })(this, os$3));
    const array$2 = [];
    const optionalMessages = new $c_sjs_js_WrappedArray().init___sjs_js_Array(array$2);
    this$16.internalLog__F2__I__F0__sc_Seq__V(new $c_sjsr_AnonFunction2().init___sjs_js_Function2((function($this) {
      return (function(message$2$2, optionalParams$2) {
        const optionalParams = $as_sc_Seq(optionalParams$2);
        const jsx$2 = $m_Lorg_scalajs_dom_package$().console__Lorg_scalajs_dom_raw_Console();
        const jsx$5 = jsx$2.info;
        const this$18 = $m_sjsr_Compat$();
        let jsx$4;
        if ($is_sjs_js_ArrayOps(optionalParams)) {
          const x2 = $as_sjs_js_ArrayOps(optionalParams);
          jsx$4 = x2.scala$scalajs$js$ArrayOps$$array$f
        } else if ($is_sjs_js_WrappedArray(optionalParams)) {
          const x3 = $as_sjs_js_WrappedArray(optionalParams);
          jsx$4 = x3.array$6
        } else {
          const result = [];
          optionalParams.foreach__F1__V(new $c_sjsr_AnonFunction1().init___sjs_js_Function1((function($this$1, result$1) {
            return (function(x$2) {
              return $uI(result$1.push(x$2))
            })
          })(this$18, result)));
          jsx$4 = result
        };
        const jsx$3 = [message$2$2].concat(jsx$4);
        jsx$5.apply(jsx$2, jsx$3)
      })
    })(this$16)), $m_Lorg_scalalang_utils_Logger$Level$().Info$1, message, optionalMessages);
    return os$3
  };
}
const $d_Lorg_scalalang_utils_OS$ = new $TypeData().initClass({
  Lorg_scalalang_utils_OS$: 0
}, false, "org.scalalang.utils.OS$", {
  Lorg_scalalang_utils_OS$: 1,
  O: 1
});
$c_Lorg_scalalang_utils_OS$.prototype.$classData = $d_Lorg_scalalang_utils_OS$;
let $n_Lorg_scalalang_utils_OS$ = (void 0);
const $m_Lorg_scalalang_utils_OS$ = (function() {
  if ((!$n_Lorg_scalalang_utils_OS$)) {
    $n_Lorg_scalalang_utils_OS$ = new $c_Lorg_scalalang_utils_OS$().init___()
  };
  return $n_Lorg_scalalang_utils_OS$
});
class $c_jl_Class extends $c_O {
  constructor() {
    super();
    this.data$1 = null
  };
  getName__T() {
    return $as_T(this.data$1.name)
  };
  isPrimitive__Z() {
    return $uZ(this.data$1.isPrimitive)
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  init___jl_ScalaJSClassData(data) {
    this.data$1 = data;
    return this
  };
  isInterface__Z() {
    return $uZ(this.data$1.isInterface)
  };
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
const $d_s_Product = new $TypeData().initClass({
  s_Product: 0
}, true, "scala.Product", {
  s_Product: 1,
  s_Equals: 1
});
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  avalanche__p1__I__I(hash) {
    let h = hash;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  productHash__s_Product__I__I(x, seed) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      const this$1 = x.productPrefix__T();
      return $m_sjsr_RuntimeString$().hashCode__T__I(this$1)
    } else {
      let h = seed;
      let i = 0;
      while ((i < arr)) {
        h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x.productElement__I__O(i)));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  finalizeHash__I__I__I(hash, length) {
    return this.avalanche__p1__I__I((hash ^ length))
  };
  orderedHash__sc_TraversableOnce__I__I(xs, seed) {
    const n = new $c_sr_IntRef().init___I(0);
    const h = new $c_sr_IntRef().init___I(seed);
    xs.foreach__F1__V(new $c_sjsr_AnonFunction1().init___sjs_js_Function1((function($this, n$1, h$1) {
      return (function(x$2) {
        h$1.elem$1 = $this.mix__I__I__I(h$1.elem$1, $m_sr_Statics$().anyHash__O__I(x$2));
        n$1.elem$1 = ((1 + n$1.elem$1) | 0)
      })
    })(this, n, h)));
    return this.finalizeHash__I__I__I(h.elem$1, n.elem$1)
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    return this.finalizeHash__I__I__I(h, n)
  };
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.empty$1 = null
  };
  init___() {
    $n_sc_Iterator$ = this;
    this.empty$1 = new $c_sc_Iterator$$anon$2().init___();
    return this
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
const $m_sc_Iterator$ = (function() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$().init___()
  };
  return $n_sc_Iterator$
});
const $f_sc_TraversableOnce__mkString__T__T__T__T = (function($thiz, start, sep, end) {
  const b = new $c_scm_StringBuilder().init___();
  const this$1 = $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end);
  return this$1.underlying$5.java$lang$StringBuilder$$content$f
});
const $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const first = new $c_sr_BooleanRef().init___Z(true);
  b.append__T__scm_StringBuilder(start);
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1().init___sjs_js_Function1((function($this, b$1, sep$1, first$1) {
    return (function(x$2) {
      if (first$1.elem$1) {
        b$1.append__O__scm_StringBuilder(x$2);
        first$1.elem$1 = false;
        return (void 0)
      } else {
        b$1.append__T__scm_StringBuilder(sep$1);
        return b$1.append__O__scm_StringBuilder(x$2)
      }
    })
  })($thiz, b, sep, first)));
  b.append__T__scm_StringBuilder(end);
  return b
});
class $c_sjsr_Bits$ extends $c_O {
  constructor() {
    super();
    this.scala$scalajs$runtime$Bits$$$undareTypedArraysSupported$f = false;
    this.arrayBuffer$1 = null;
    this.int32Array$1 = null;
    this.float32Array$1 = null;
    this.float64Array$1 = null;
    this.areTypedArraysBigEndian$1 = false;
    this.highOffset$1 = 0;
    this.lowOffset$1 = 0
  };
  init___() {
    $n_sjsr_Bits$ = this;
    this.scala$scalajs$runtime$Bits$$$undareTypedArraysSupported$f = true;
    this.arrayBuffer$1 = new $g.ArrayBuffer(8);
    this.int32Array$1 = new $g.Int32Array(this.arrayBuffer$1, 0, 2);
    this.float32Array$1 = new $g.Float32Array(this.arrayBuffer$1, 0, 2);
    this.float64Array$1 = new $g.Float64Array(this.arrayBuffer$1, 0, 1);
    this.int32Array$1[0] = 16909060;
    this.areTypedArraysBigEndian$1 = ($uB(new $g.Int8Array(this.arrayBuffer$1, 0, 8)[0]) === 1);
    this.highOffset$1 = (this.areTypedArraysBigEndian$1 ? 0 : 1);
    this.lowOffset$1 = (this.areTypedArraysBigEndian$1 ? 1 : 0);
    return this
  };
  numberHashCode__D__I(value) {
    const iv = $uI((value | 0));
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.lo$2;
      const hi = t.hi$2;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.float64Array$1[0] = value;
    const value$1 = $uI(this.int32Array$1[this.highOffset$1]);
    const value$2 = $uI(this.int32Array$1[this.lowOffset$1]);
    return new $c_sjsr_RuntimeLong().init___I__I(value$2, value$1)
  };
}
const $d_sjsr_Bits$ = new $TypeData().initClass({
  sjsr_Bits$: 0
}, false, "scala.scalajs.runtime.Bits$", {
  sjsr_Bits$: 1,
  O: 1
});
$c_sjsr_Bits$.prototype.$classData = $d_sjsr_Bits$;
let $n_sjsr_Bits$ = (void 0);
const $m_sjsr_Bits$ = (function() {
  if ((!$n_sjsr_Bits$)) {
    $n_sjsr_Bits$ = new $c_sjsr_Bits$().init___()
  };
  return $n_sjsr_Bits$
});
class $c_sjsr_Compat$ extends $c_O {
  init___() {
    return this
  };
}
const $d_sjsr_Compat$ = new $TypeData().initClass({
  sjsr_Compat$: 0
}, false, "scala.scalajs.runtime.Compat$", {
  sjsr_Compat$: 1,
  O: 1
});
$c_sjsr_Compat$.prototype.$classData = $d_sjsr_Compat$;
let $n_sjsr_Compat$ = (void 0);
const $m_sjsr_Compat$ = (function() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$().init___()
  };
  return $n_sjsr_Compat$
});
class $c_sjsr_RuntimeString$ extends $c_O {
  constructor() {
    super();
    this.CASE$undINSENSITIVE$undORDER$1 = null;
    this.bitmap$0$1 = false
  };
  init___() {
    return this
  };
  hashCode__T__I(thiz) {
    let res = 0;
    let mul = 1;
    let i = (((-1) + $uI(thiz.length)) | 0);
    while ((i >= 0)) {
      const jsx$1 = res;
      const index = i;
      res = ((jsx$1 + $imul((65535 & $uI(thiz.charCodeAt(index))), mul)) | 0);
      mul = $imul(31, mul);
      i = (((-1) + i) | 0)
    };
    return res
  };
}
const $d_sjsr_RuntimeString$ = new $TypeData().initClass({
  sjsr_RuntimeString$: 0
}, false, "scala.scalajs.runtime.RuntimeString$", {
  sjsr_RuntimeString$: 1,
  O: 1
});
$c_sjsr_RuntimeString$.prototype.$classData = $d_sjsr_RuntimeString$;
let $n_sjsr_RuntimeString$ = (void 0);
const $m_sjsr_RuntimeString$ = (function() {
  if ((!$n_sjsr_RuntimeString$)) {
    $n_sjsr_RuntimeString$ = new $c_sjsr_RuntimeString$().init___()
  };
  return $n_sjsr_RuntimeString$
});
class $c_sjsr_package$ extends $c_O {
  init___() {
    return this
  };
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ($is_sjs_js_JavaScriptException(th)) {
      const x2 = $as_sjs_js_JavaScriptException(th);
      const e = x2.exception$4;
      return e
    } else {
      return th
    }
  };
  wrapJavaScriptException__O__jl_Throwable(e) {
    if ($is_jl_Throwable(e)) {
      const x2 = $as_jl_Throwable(e);
      return x2
    } else {
      return new $c_sjs_js_JavaScriptException().init___O(e)
    }
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
const $m_sjsr_package$ = (function() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$().init___()
  };
  return $n_sjsr_package$
});
class $c_sr_ScalaRunTime$ extends $c_O {
  init___() {
    return this
  };
  $$undtoString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
const $m_sr_ScalaRunTime$ = (function() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$().init___()
  };
  return $n_sr_ScalaRunTime$
});
class $c_sr_Statics$ extends $c_O {
  init___() {
    return this
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_sjsr_RuntimeLong$();
      const lo = this$1.scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
      return (($m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_sjsr_Bits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = $uD(x);
      return this.doubleHash__D__I(x3)
    } else if ($is_sjsr_RuntimeLong(x)) {
      const t = $uJ(x);
      const lo = t.lo$2;
      const hi = t.hi$2;
      return this.longHash__J__I(new $c_sjsr_RuntimeLong().init___I__I(lo, hi))
    } else {
      return $objectHashCode(x)
    }
  };
  longHash__J__I(lv) {
    const lo = lv.lo$2;
    const lo$1 = lv.hi$2;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
const $m_sr_Statics$ = (function() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$().init___()
  };
  return $n_sr_Statics$
});
class $c_Lorg_scalalang_utils_Logger extends $c_O {
  constructor() {
    super();
    this.prefix$1 = null;
    this.parentLogger$1 = null;
    this.logLevel$1 = 0
  };
  init___T__Lorg_scalalang_utils_LoggerUtil(prefix, parentLogger) {
    this.prefix$1 = prefix;
    this.parentLogger$1 = parentLogger;
    this.logLevel$1 = $m_Lorg_scalalang_utils_Logger$Level$().Trace$1;
    return this
  };
  internalLog__F2__I__F0__sc_Seq__V(logger, level, lazyMessage, optionalMessages) {
    if ((this.logLevel$1 >= level)) {
      this.parentLogger$1.internalLog__F2__I__F0__sc_Seq__V(logger, level, new $c_sjsr_AnonFunction0().init___sjs_js_Function0((function($this, lazyMessage$1) {
        return (function() {
          const s = (("" + $this.prefix$1) + lazyMessage$1.apply__O());
          return s
        })
      })(this, lazyMessage)), optionalMessages)
    }
  };
}
const $d_Lorg_scalalang_utils_Logger = new $TypeData().initClass({
  Lorg_scalalang_utils_Logger: 0
}, false, "org.scalalang.utils.Logger", {
  Lorg_scalalang_utils_Logger: 1,
  O: 1,
  Lorg_scalalang_utils_LoggerUtil: 1
});
$c_Lorg_scalalang_utils_Logger.prototype.$classData = $d_Lorg_scalalang_utils_Logger;
class $c_Lorg_scalalang_utils_RootLogger$ extends $c_O {
  constructor() {
    super();
    this.logLevel$1 = 0
  };
  init___() {
    $n_Lorg_scalalang_utils_RootLogger$ = this;
    this.logLevel$1 = $m_Lorg_scalalang_utils_Logger$Level$().Trace$1;
    this.logLevel$1 = $m_Lorg_scalalang_utils_Logger$Level$().Info$1;
    return this
  };
  internalLog__F2__I__F0__sc_Seq__V(logger, level, lazyMessage, optionalMessages) {
    if ((this.logLevel$1 >= level)) {
      const message = lazyMessage.apply__O();
      logger.apply__O__O__O(message, optionalMessages)
    }
  };
}
const $d_Lorg_scalalang_utils_RootLogger$ = new $TypeData().initClass({
  Lorg_scalalang_utils_RootLogger$: 0
}, false, "org.scalalang.utils.RootLogger$", {
  Lorg_scalalang_utils_RootLogger$: 1,
  O: 1,
  Lorg_scalalang_utils_LoggerUtil: 1
});
$c_Lorg_scalalang_utils_RootLogger$.prototype.$classData = $d_Lorg_scalalang_utils_RootLogger$;
let $n_Lorg_scalalang_utils_RootLogger$ = (void 0);
const $m_Lorg_scalalang_utils_RootLogger$ = (function() {
  if ((!$n_Lorg_scalalang_utils_RootLogger$)) {
    $n_Lorg_scalalang_utils_RootLogger$ = new $c_Lorg_scalalang_utils_RootLogger$().init___()
  };
  return $n_Lorg_scalalang_utils_RootLogger$
});
class $c_jl_Number extends $c_O {
}
class $c_jl_Throwable extends $c_O {
  constructor() {
    super();
    this.s$1 = null;
    this.e$1 = null;
    this.stackTrace$1 = null
  };
  fillInStackTrace__jl_Throwable() {
    const v = $g.Error.captureStackTrace;
    if ((v === (void 0))) {
      let e$1;
      try {
        e$1 = {}.undef()
      } catch (e) {
        const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 !== null)) {
          if ($is_sjs_js_JavaScriptException(e$2)) {
            const x5 = $as_sjs_js_JavaScriptException(e$2);
            const e$3 = x5.exception$4;
            e$1 = e$3
          } else {
            throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
          }
        } else {
          throw e
        }
      };
      this.stackdata = e$1
    } else {
      $g.Error.captureStackTrace(this);
      this.stackdata = this
    };
    return this
  };
  getMessage__T() {
    return this.s$1
  };
  toString__T() {
    const className = $objectGetClass(this).getName__T();
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  init___T__jl_Throwable(s, e) {
    this.s$1 = s;
    this.e$1 = e;
    this.fillInStackTrace__jl_Throwable();
    return this
  };
}
const $is_jl_Throwable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.jl_Throwable)))
});
const $as_jl_Throwable = (function(obj) {
  return (($is_jl_Throwable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
});
const $isArrayOf_jl_Throwable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
});
const $asArrayOf_jl_Throwable = (function(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
});
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.seqSeed$2 = 0;
    this.mapSeed$2 = 0;
    this.setSeed$2 = 0
  };
  init___() {
    $n_s_util_hashing_MurmurHash3$ = this;
    this.seqSeed$2 = $m_sjsr_RuntimeString$().hashCode__T__I("Seq");
    this.mapSeed$2 = $m_sjsr_RuntimeString$().hashCode__T__I("Map");
    this.setSeed$2 = $m_sjsr_RuntimeString$().hashCode__T__I("Set");
    return this
  };
  seqHash__sc_Seq__I(xs) {
    if ($is_sci_List(xs)) {
      const x2 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x2, this.seqSeed$2)
    } else {
      return this.orderedHash__sc_TraversableOnce__I__I(xs, this.seqSeed$2)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
const $m_s_util_hashing_MurmurHash3$ = (function() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$().init___()
  };
  return $n_s_util_hashing_MurmurHash3$
});
const $f_sc_Iterator__toString__T = (function($thiz) {
  return (($thiz.hasNext__Z() ? "non-empty" : "empty") + " iterator")
});
const $f_sc_Iterator__foreach__F1__V = (function($thiz, f) {
  while ($thiz.hasNext__Z()) {
    f.apply__O__O($thiz.next__O())
  }
});
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_AbstractFunction2 extends $c_O {
  toString__T() {
    return "<function2>"
  };
}
class $c_sr_BooleanRef extends $c_O {
  constructor() {
    super();
    this.elem$1 = false
  };
  toString__T() {
    const b = this.elem$1;
    return ("" + b)
  };
  init___Z(elem) {
    this.elem$1 = elem;
    return this
  };
}
const $d_sr_BooleanRef = new $TypeData().initClass({
  sr_BooleanRef: 0
}, false, "scala.runtime.BooleanRef", {
  sr_BooleanRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_BooleanRef.prototype.$classData = $d_sr_BooleanRef;
const $d_sr_BoxedUnit = new $TypeData().initClass({
  sr_BoxedUnit: 0
}, false, "scala.runtime.BoxedUnit", {
  sr_BoxedUnit: 1,
  O: 1,
  Ljava_io_Serializable: 1
}, (void 0), (void 0), (function(x) {
  return (x === (void 0))
}));
class $c_sr_IntRef extends $c_O {
  constructor() {
    super();
    this.elem$1 = 0
  };
  toString__T() {
    const i = this.elem$1;
    return ("" + i)
  };
  init___I(elem) {
    this.elem$1 = elem;
    return this
  };
}
const $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "boolean")
}));
class $c_jl_Character extends $c_O {
  constructor() {
    super();
    this.value$1 = 0
  };
  toString__T() {
    const c = this.value$1;
    return $as_T($g.String.fromCharCode(c))
  };
  init___C(value) {
    this.value$1 = value;
    return this
  };
  hashCode__I() {
    return this.value$1
  };
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_jl_Character.prototype.$classData = $d_jl_Character;
class $c_jl_Double$ extends $c_O {
  constructor() {
    super();
    this.doubleStrPat$1 = null;
    this.doubleStrHexPat$1 = null;
    this.bitmap$0$1 = 0
  };
  init___() {
    return this
  };
  compare__D__D__I(a, b) {
    if ((a !== a)) {
      return ((b !== b) ? 0 : 1)
    } else if ((b !== b)) {
      return (-1)
    } else if ((a === b)) {
      if ((a === 0.0)) {
        const ainf = (1.0 / a);
        return ((ainf === (1.0 / b)) ? 0 : ((ainf < 0) ? (-1) : 1))
      } else {
        return 0
      }
    } else {
      return ((a < b) ? (-1) : 1)
    }
  };
}
const $d_jl_Double$ = new $TypeData().initClass({
  jl_Double$: 0
}, false, "java.lang.Double$", {
  jl_Double$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Double$.prototype.$classData = $d_jl_Double$;
let $n_jl_Double$ = (void 0);
const $m_jl_Double$ = (function() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$().init___()
  };
  return $n_jl_Double$
});
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
class $c_s_Option$ extends $c_O {
  init___() {
    return this
  };
  apply__O__s_Option(x) {
    return ((x === null) ? $m_s_None$() : new $c_s_Some().init___O(x))
  };
}
const $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
let $n_s_Option$ = (void 0);
const $m_s_Option$ = (function() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$().init___()
  };
  return $n_s_Option$
});
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor() {
    super();
    this.f$2 = null
  };
  apply__O() {
    return (0, this.f$2)()
  };
  init___sjs_js_Function0(f) {
    this.f$2 = f;
    return this
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor() {
    super();
    this.f$2 = null
  };
  apply__O__O(arg1) {
    return (0, this.f$2)(arg1)
  };
  init___sjs_js_Function1(f) {
    this.f$2 = f;
    return this
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
class $c_sjsr_AnonFunction2 extends $c_sr_AbstractFunction2 {
  constructor() {
    super();
    this.f$2 = null
  };
  init___sjs_js_Function2(f) {
    this.f$2 = f;
    return this
  };
  apply__O__O__O(arg1, arg2) {
    return (0, this.f$2)(arg1, arg2)
  };
}
const $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
class $c_sjsr_RuntimeLong$ extends $c_O {
  constructor() {
    super();
    this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
    this.Zero$1 = null
  };
  init___() {
    $n_sjsr_RuntimeLong$ = this;
    this.Zero$1 = new $c_sjsr_RuntimeLong().init___I__I(0, 0);
    return this
  };
  Zero__sjsr_RuntimeLong() {
    return this.Zero$1
  };
  toUnsignedString__p1__I__I__T(lo, hi) {
    if ((((-2097152) & hi) === 0)) {
      const this$5 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
      return ("" + this$5)
    } else {
      return $as_T(this.unsignedDivModHelper__p1__I__I__I__I__I__sjs_js_$bar(lo, hi, 1000000000, 0, 2))
    }
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException().init___T("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
          return (-2147483648)
        } else {
          const lo = ((alo / blo) | 0);
          this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (-1);
        return (-1)
      } else {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
        return 0
      }
    } else {
      const neg = (ahi < 0);
      let abs_$_lo$2;
      let abs_$_hi$2;
      if (neg) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const jsx$1_$_lo$2 = lo$1;
        const jsx$1_$_hi$2 = hi;
        abs_$_lo$2 = jsx$1_$_lo$2;
        abs_$_hi$2 = jsx$1_$_hi$2
      } else {
        const jsx$2_$_lo$2 = alo;
        const jsx$2_$_hi$2 = ahi;
        abs_$_lo$2 = jsx$2_$_lo$2;
        abs_$_hi$2 = jsx$2_$_hi$2
      };
      const neg$1 = (bhi < 0);
      let abs$1_$_lo$2;
      let abs$1_$_hi$2;
      if (neg$1) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const jsx$3_$_lo$2 = lo$2;
        const jsx$3_$_hi$2 = hi$1;
        abs$1_$_lo$2 = jsx$3_$_lo$2;
        abs$1_$_hi$2 = jsx$3_$_hi$2
      } else {
        const jsx$4_$_lo$2 = blo;
        const jsx$4_$_hi$2 = bhi;
        abs$1_$_lo$2 = jsx$4_$_lo$2;
        abs$1_$_hi$2 = jsx$4_$_hi$2
      };
      const absRLo = this.unsigned$und$div__p1__I__I__I__I__I(abs_$_lo$2, abs_$_hi$2, abs$1_$_lo$2, abs$1_$_hi$2);
      if ((neg === neg$1)) {
        return absRLo
      } else {
        const hi$2 = this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const jsx$1 = $uD((x >>> 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * jsx$1) + $uD((x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
    }
  };
  fromDouble__D__sjsr_RuntimeLong(value) {
    const lo = this.scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_sjsr_RuntimeLong().init___I__I(lo, this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
  };
  scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 2147483647;
      return (-1)
    } else {
      const rawLo = $uI((value | 0));
      const x = (value / 4.294967296E9);
      const rawHi = $uI((x | 0));
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (((value < 0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  unsigned$und$div__p1__I__I__I__I__I(alo, ahi, blo, bhi) {
    if ((((-2097152) & ahi) === 0)) {
      if ((((-2097152) & bhi) === 0)) {
        const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
        const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
        const rDouble = (aDouble / bDouble);
        const x = (rDouble / 4.294967296E9);
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = $uI((x | 0));
        return $uI((rDouble | 0))
      } else {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
        return 0
      }
    } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
      const pow = ((31 - $clz32(blo)) | 0);
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((ahi >>> pow) | 0);
      return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
    } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
      const pow$2 = ((31 - $clz32(bhi)) | 0);
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
      return ((ahi >>> pow$2) | 0)
    } else {
      return $uI(this.unsignedDivModHelper__p1__I__I__I__I__I__sjs_js_$bar(alo, ahi, blo, bhi, 0))
    }
  };
  scala$scalajs$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + this.toUnsignedString__p1__I__I__T(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : this.toUnsignedString__p1__I__I__T(lo, hi)))
  };
  scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  unsignedDivModHelper__p1__I__I__I__I__I__sjs_js_$bar(alo, ahi, blo, bhi, ask) {
    let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
    const n = shift;
    const lo = (((32 & n) === 0) ? (blo << n) : 0);
    const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
    let bShiftLo = lo;
    let bShiftHi = hi;
    let remLo = alo;
    let remHi = ahi;
    let quotLo = 0;
    let quotHi = 0;
    while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
      const alo$1 = remLo;
      const ahi$1 = remHi;
      const blo$1 = bShiftLo;
      const bhi$1 = bShiftHi;
      if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
        const lo$1 = remLo;
        const hi$1 = remHi;
        const lo$2 = bShiftLo;
        const hi$2 = bShiftHi;
        const lo$3 = ((lo$1 - lo$2) | 0);
        const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
        remLo = lo$3;
        remHi = hi$3;
        if ((shift < 32)) {
          quotLo = (quotLo | (1 << shift))
        } else {
          quotHi = (quotHi | (1 << shift))
        }
      };
      shift = (((-1) + shift) | 0);
      const lo$4 = bShiftLo;
      const hi$4 = bShiftHi;
      const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
      const hi$5 = ((hi$4 >>> 1) | 0);
      bShiftLo = lo$5;
      bShiftHi = hi$5
    };
    const alo$2 = remLo;
    const ahi$2 = remHi;
    if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
      const lo$6 = remLo;
      const hi$6 = remHi;
      const remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      if ((ask !== 1)) {
        const x = (remDouble / bDouble);
        const lo$7 = $uI((x | 0));
        const x$1 = (x / 4.294967296E9);
        const hi$7 = $uI((x$1 | 0));
        const lo$8 = quotLo;
        const hi$8 = quotHi;
        const lo$9 = ((lo$8 + lo$7) | 0);
        const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
        quotLo = lo$9;
        quotHi = hi$9
      };
      if ((ask !== 0)) {
        const rem_mod_bDouble = (remDouble % bDouble);
        remLo = $uI((rem_mod_bDouble | 0));
        const x$2 = (rem_mod_bDouble / 4.294967296E9);
        remHi = $uI((x$2 | 0))
      }
    };
    if ((ask === 0)) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = quotHi;
      const a = quotLo;
      return a
    } else if ((ask === 1)) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = remHi;
      const a$1 = remLo;
      return a$1
    } else {
      const lo$10 = quotLo;
      const hi$10 = quotHi;
      const quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
      const this$25 = remLo;
      const remStr = ("" + this$25);
      const a$2 = ((("" + quot) + $as_T("000000000".substring($uI(remStr.length)))) + remStr);
      return a$2
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw new $c_jl_ArithmeticException().init___T("/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = ((alo % blo) | 0);
          this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (lo >> 31);
          return lo
        } else {
          this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
        return 0
      } else {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ahi;
        return alo
      }
    } else {
      const neg = (ahi < 0);
      let abs_$_lo$2;
      let abs_$_hi$2;
      if (neg) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const jsx$1_$_lo$2 = lo$1;
        const jsx$1_$_hi$2 = hi;
        abs_$_lo$2 = jsx$1_$_lo$2;
        abs_$_hi$2 = jsx$1_$_hi$2
      } else {
        const jsx$2_$_lo$2 = alo;
        const jsx$2_$_hi$2 = ahi;
        abs_$_lo$2 = jsx$2_$_lo$2;
        abs_$_hi$2 = jsx$2_$_hi$2
      };
      const neg$1 = (bhi < 0);
      let abs$1_$_lo$2;
      let abs$1_$_hi$2;
      if (neg$1) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const jsx$3_$_lo$2 = lo$2;
        const jsx$3_$_hi$2 = hi$1;
        abs$1_$_lo$2 = jsx$3_$_lo$2;
        abs$1_$_hi$2 = jsx$3_$_hi$2
      } else {
        const jsx$4_$_lo$2 = blo;
        const jsx$4_$_hi$2 = bhi;
        abs$1_$_lo$2 = jsx$4_$_lo$2;
        abs$1_$_hi$2 = jsx$4_$_hi$2
      };
      const absRLo = this.unsigned$und$percent__p1__I__I__I__I__I(abs_$_lo$2, abs_$_hi$2, abs$1_$_lo$2, abs$1_$_hi$2);
      if (neg) {
        const hi$2 = this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
  unsigned$und$percent__p1__I__I__I__I__I(alo, ahi, blo, bhi) {
    if ((((-2097152) & ahi) === 0)) {
      if ((((-2097152) & bhi) === 0)) {
        const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
        const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
        const rDouble = (aDouble % bDouble);
        const x = (rDouble / 4.294967296E9);
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = $uI((x | 0));
        return $uI((rDouble | 0))
      } else {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ahi;
        return alo
      }
    } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
      return (alo & (((-1) + blo) | 0))
    } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (ahi & (((-1) + bhi) | 0));
      return alo
    } else {
      return $uI(this.unsignedDivModHelper__p1__I__I__I__I__I__sjs_js_$bar(alo, ahi, blo, bhi, 1))
    }
  };
}
const $d_sjsr_RuntimeLong$ = new $TypeData().initClass({
  sjsr_RuntimeLong$: 0
}, false, "scala.scalajs.runtime.RuntimeLong$", {
  sjsr_RuntimeLong$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_RuntimeLong$.prototype.$classData = $d_sjsr_RuntimeLong$;
let $n_sjsr_RuntimeLong$ = (void 0);
const $m_sjsr_RuntimeLong$ = (function() {
  if ((!$n_sjsr_RuntimeLong$)) {
    $n_sjsr_RuntimeLong$ = new $c_sjsr_RuntimeLong$().init___()
  };
  return $n_sjsr_RuntimeLong$
});
const $is_T = (function(obj) {
  return ((typeof obj) === "string")
});
const $as_T = (function(obj) {
  return (($is_T(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
});
const $isArrayOf_T = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
});
const $asArrayOf_T = (function(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
});
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_CharSequence: 1,
  jl_Comparable: 1
}, (void 0), (void 0), $is_T);
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isByte(x)
}));
class $c_jl_CloneNotSupportedException extends $c_jl_Exception {
  init___() {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, null, null);
    return this
  };
}
const $d_jl_CloneNotSupportedException = new $TypeData().initClass({
  jl_CloneNotSupportedException: 0
}, false, "java.lang.CloneNotSupportedException", {
  jl_CloneNotSupportedException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_CloneNotSupportedException.prototype.$classData = $d_jl_CloneNotSupportedException;
const $isArrayOf_jl_Double = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
});
const $asArrayOf_jl_Double = (function(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
});
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "number")
}));
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isFloat(x)
}));
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isInt(x)
}));
const $isArrayOf_jl_Long = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
});
const $asArrayOf_jl_Long = (function(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
});
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $is_sjsr_RuntimeLong(x)
}));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isShort(x)
}));
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.java$lang$StringBuilder$$content$f = null
  };
  init___() {
    this.java$lang$StringBuilder$$content$f = "";
    return this
  };
  toString__T() {
    return this.java$lang$StringBuilder$$content$f
  };
  init___I(initialCapacity) {
    $c_jl_StringBuilder.prototype.init___.call(this);
    if ((initialCapacity < 0)) {
      throw new $c_jl_NegativeArraySizeException().init___()
    };
    return this
  };
  length__I() {
    const thiz = this.java$lang$StringBuilder$$content$f;
    return $uI(thiz.length)
  };
  charAt__I__C(index) {
    const thiz = this.java$lang$StringBuilder$$content$f;
    return (65535 & $uI(thiz.charCodeAt(index)))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_sc_AbstractIterator extends $c_O {
  toString__T() {
    return $f_sc_Iterator__toString__T(this)
  };
  foreach__F1__V(f) {
    $f_sc_Iterator__foreach__F1__V(this, f)
  };
}
class $c_sjsr_RuntimeLong extends $c_jl_Number {
  constructor() {
    super();
    this.lo$2 = 0;
    this.hi$2 = 0
  };
  longValue__J() {
    return $uJ(this)
  };
  $$bar__sjsr_RuntimeLong__sjsr_RuntimeLong(b) {
    return new $c_sjsr_RuntimeLong().init___I__I((this.lo$2 | b.lo$2), (this.hi$2 | b.hi$2))
  };
  $$greater$eq__sjsr_RuntimeLong__Z(b) {
    const ahi = this.hi$2;
    const bhi = b.hi$2;
    return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) >= ((-2147483648) ^ b.lo$2)) : (ahi > bhi))
  };
  byteValue__B() {
    return ((this.lo$2 << 24) >> 24)
  };
  equals__O__Z(that) {
    if ($is_sjsr_RuntimeLong(that)) {
      const x2 = $as_sjsr_RuntimeLong(that);
      return ((this.lo$2 === x2.lo$2) && (this.hi$2 === x2.hi$2))
    } else {
      return false
    }
  };
  $$less__sjsr_RuntimeLong__Z(b) {
    const ahi = this.hi$2;
    const bhi = b.hi$2;
    return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) < ((-2147483648) ^ b.lo$2)) : (ahi < bhi))
  };
  $$times__sjsr_RuntimeLong__sjsr_RuntimeLong(b) {
    const alo = this.lo$2;
    const blo = b.lo$2;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.hi$2) + $imul(this.hi$2, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_sjsr_RuntimeLong().init___I__I(lo, hi)
  };
  init___I__I__I(l, m, h) {
    $c_sjsr_RuntimeLong.prototype.init___I__I.call(this, (l | (m << 22)), ((m >> 10) | (h << 12)));
    return this
  };
  $$percent__sjsr_RuntimeLong__sjsr_RuntimeLong(b) {
    const this$1 = $m_sjsr_RuntimeLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.lo$2, this.hi$2, b.lo$2, b.hi$2);
    return new $c_sjsr_RuntimeLong().init___I__I(lo, this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
  };
  toString__T() {
    return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toString__I__I__T(this.lo$2, this.hi$2)
  };
  init___I__I(lo, hi) {
    this.lo$2 = lo;
    this.hi$2 = hi;
    return this
  };
  compareTo__O__I(x$1) {
    const that = $as_sjsr_RuntimeLong(x$1);
    return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I(this.lo$2, this.hi$2, that.lo$2, that.hi$2)
  };
  $$less$eq__sjsr_RuntimeLong__Z(b) {
    const ahi = this.hi$2;
    const bhi = b.hi$2;
    return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) <= ((-2147483648) ^ b.lo$2)) : (ahi < bhi))
  };
  $$amp__sjsr_RuntimeLong__sjsr_RuntimeLong(b) {
    return new $c_sjsr_RuntimeLong().init___I__I((this.lo$2 & b.lo$2), (this.hi$2 & b.hi$2))
  };
  $$greater$greater$greater__I__sjsr_RuntimeLong(n) {
    return new $c_sjsr_RuntimeLong().init___I__I((((32 & n) === 0) ? (((this.lo$2 >>> n) | 0) | ((this.hi$2 << 1) << ((31 - n) | 0))) : ((this.hi$2 >>> n) | 0)), (((32 & n) === 0) ? ((this.hi$2 >>> n) | 0) : 0))
  };
  $$greater__sjsr_RuntimeLong__Z(b) {
    const ahi = this.hi$2;
    const bhi = b.hi$2;
    return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) > ((-2147483648) ^ b.lo$2)) : (ahi > bhi))
  };
  $$less$less__I__sjsr_RuntimeLong(n) {
    return new $c_sjsr_RuntimeLong().init___I__I((((32 & n) === 0) ? (this.lo$2 << n) : 0), (((32 & n) === 0) ? (((((this.lo$2 >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.hi$2 << n)) : (this.lo$2 << n)))
  };
  init___I(value) {
    $c_sjsr_RuntimeLong.prototype.init___I__I.call(this, value, (value >> 31));
    return this
  };
  toInt__I() {
    return this.lo$2
  };
  notEquals__sjsr_RuntimeLong__Z(b) {
    return (!((this.lo$2 === b.lo$2) && (this.hi$2 === b.hi$2)))
  };
  unary$und$minus__sjsr_RuntimeLong() {
    const lo = this.lo$2;
    const hi = this.hi$2;
    return new $c_sjsr_RuntimeLong().init___I__I(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $$plus__sjsr_RuntimeLong__sjsr_RuntimeLong(b) {
    const alo = this.lo$2;
    const ahi = this.hi$2;
    const bhi = b.hi$2;
    const lo = ((alo + b.lo$2) | 0);
    return new $c_sjsr_RuntimeLong().init___I__I(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  shortValue__S() {
    return ((this.lo$2 << 16) >> 16)
  };
  $$greater$greater__I__sjsr_RuntimeLong(n) {
    return new $c_sjsr_RuntimeLong().init___I__I((((32 & n) === 0) ? (((this.lo$2 >>> n) | 0) | ((this.hi$2 << 1) << ((31 - n) | 0))) : (this.hi$2 >> n)), (((32 & n) === 0) ? (this.hi$2 >> n) : (this.hi$2 >> 31)))
  };
  toDouble__D() {
    return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2)
  };
  $$div__sjsr_RuntimeLong__sjsr_RuntimeLong(b) {
    const this$1 = $m_sjsr_RuntimeLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.lo$2, this.hi$2, b.lo$2, b.hi$2);
    return new $c_sjsr_RuntimeLong().init___I__I(lo, this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
  };
  doubleValue__D() {
    return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2)
  };
  hashCode__I() {
    return (this.lo$2 ^ this.hi$2)
  };
  intValue__I() {
    return this.lo$2
  };
  unary$und$tilde__sjsr_RuntimeLong() {
    return new $c_sjsr_RuntimeLong().init___I__I((~this.lo$2), (~this.hi$2))
  };
  compareTo__jl_Long__I(that) {
    return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I(this.lo$2, this.hi$2, that.lo$2, that.hi$2)
  };
  floatValue__F() {
    return $fround($m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2))
  };
  $$minus__sjsr_RuntimeLong__sjsr_RuntimeLong(b) {
    const alo = this.lo$2;
    const ahi = this.hi$2;
    const bhi = b.hi$2;
    const lo = ((alo - b.lo$2) | 0);
    return new $c_sjsr_RuntimeLong().init___I__I(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $$up__sjsr_RuntimeLong__sjsr_RuntimeLong(b) {
    return new $c_sjsr_RuntimeLong().init___I__I((this.lo$2 ^ b.lo$2), (this.hi$2 ^ b.hi$2))
  };
  equals__sjsr_RuntimeLong__Z(b) {
    return ((this.lo$2 === b.lo$2) && (this.hi$2 === b.hi$2))
  };
}
const $is_sjsr_RuntimeLong = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjsr_RuntimeLong)))
});
const $as_sjsr_RuntimeLong = (function(obj) {
  return (($is_sjsr_RuntimeLong(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.RuntimeLong"))
});
const $isArrayOf_sjsr_RuntimeLong = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_RuntimeLong)))
});
const $asArrayOf_sjsr_RuntimeLong = (function(obj, depth) {
  return (($isArrayOf_sjsr_RuntimeLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.RuntimeLong;", depth))
});
const $d_sjsr_RuntimeLong = new $TypeData().initClass({
  sjsr_RuntimeLong: 0
}, false, "scala.scalajs.runtime.RuntimeLong", {
  sjsr_RuntimeLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_sjsr_RuntimeLong.prototype.$classData = $d_sjsr_RuntimeLong;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  init___T(s) {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, s, null);
    return this
  };
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  init___T(s) {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, s, null);
    return this
  };
}
const $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  init___T(s) {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, s, null);
    return this
  };
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  init___() {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, null, null);
    return this
  };
}
const $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  init___() {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, null, null);
    return this
  };
}
const $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  init___T(s) {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, s, null);
    return this
  };
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_s_Option extends $c_O {
}
class $c_sc_Iterator$$anon$2 extends $c_sc_AbstractIterator {
  init___() {
    return this
  };
  next__O() {
    this.next__sr_Nothing$()
  };
  next__sr_Nothing$() {
    throw new $c_ju_NoSuchElementException().init___T("next on empty iterator")
  };
  hasNext__Z() {
    return false
  };
}
const $d_sc_Iterator$$anon$2 = new $TypeData().initClass({
  sc_Iterator$$anon$2: 0
}, false, "scala.collection.Iterator$$anon$2", {
  sc_Iterator$$anon$2: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$2.prototype.$classData = $d_sc_Iterator$$anon$2;
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.c$2 = 0;
    this.cmax$2 = 0;
    this.x$2$2 = null
  };
  next__O() {
    const result = this.x$2$2.productElement__I__O(this.c$2);
    this.c$2 = ((1 + this.c$2) | 0);
    return result
  };
  init___s_Product(x$2) {
    this.x$2$2 = x$2;
    this.c$2 = 0;
    this.cmax$2 = x$2.productArity__I();
    return this
  };
  hasNext__Z() {
    return (this.c$2 < this.cmax$2)
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_Lorg_scalalang_utils_OS$Linux$ extends $c_O {
  constructor() {
    super();
    this.navigator$1 = null;
    this.label$1 = null
  };
  init___() {
    this.navigator$1 = "Linux";
    this.label$1 = "linux";
    return this
  };
  productPrefix__T() {
    return "Linux"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    throw new $c_jl_IndexOutOfBoundsException().init___T(("" + x$1))
  };
  label__T() {
    return this.label$1
  };
  toString__T() {
    return "Linux"
  };
  navigator__T() {
    return this.navigator$1
  };
  hashCode__I() {
    return 73425108
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1().init___s_Product(this)
  };
}
const $d_Lorg_scalalang_utils_OS$Linux$ = new $TypeData().initClass({
  Lorg_scalalang_utils_OS$Linux$: 0
}, false, "org.scalalang.utils.OS$Linux$", {
  Lorg_scalalang_utils_OS$Linux$: 1,
  O: 1,
  Lorg_scalalang_utils_OS: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalalang_utils_OS$Linux$.prototype.$classData = $d_Lorg_scalalang_utils_OS$Linux$;
let $n_Lorg_scalalang_utils_OS$Linux$ = (void 0);
const $m_Lorg_scalalang_utils_OS$Linux$ = (function() {
  if ((!$n_Lorg_scalalang_utils_OS$Linux$)) {
    $n_Lorg_scalalang_utils_OS$Linux$ = new $c_Lorg_scalalang_utils_OS$Linux$().init___()
  };
  return $n_Lorg_scalalang_utils_OS$Linux$
});
class $c_Lorg_scalalang_utils_OS$Mac$ extends $c_O {
  constructor() {
    super();
    this.navigator$1 = null;
    this.label$1 = null
  };
  init___() {
    this.navigator$1 = "Mac";
    this.label$1 = "osx";
    return this
  };
  productPrefix__T() {
    return "Mac"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    throw new $c_jl_IndexOutOfBoundsException().init___T(("" + x$1))
  };
  label__T() {
    return this.label$1
  };
  toString__T() {
    return "Mac"
  };
  navigator__T() {
    return this.navigator$1
  };
  hashCode__I() {
    return 77103
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1().init___s_Product(this)
  };
}
const $d_Lorg_scalalang_utils_OS$Mac$ = new $TypeData().initClass({
  Lorg_scalalang_utils_OS$Mac$: 0
}, false, "org.scalalang.utils.OS$Mac$", {
  Lorg_scalalang_utils_OS$Mac$: 1,
  O: 1,
  Lorg_scalalang_utils_OS: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalalang_utils_OS$Mac$.prototype.$classData = $d_Lorg_scalalang_utils_OS$Mac$;
let $n_Lorg_scalalang_utils_OS$Mac$ = (void 0);
const $m_Lorg_scalalang_utils_OS$Mac$ = (function() {
  if ((!$n_Lorg_scalalang_utils_OS$Mac$)) {
    $n_Lorg_scalalang_utils_OS$Mac$ = new $c_Lorg_scalalang_utils_OS$Mac$().init___()
  };
  return $n_Lorg_scalalang_utils_OS$Mac$
});
class $c_Lorg_scalalang_utils_OS$Unix$ extends $c_O {
  constructor() {
    super();
    this.navigator$1 = null;
    this.label$1 = null
  };
  init___() {
    this.navigator$1 = "X11";
    this.label$1 = "unix";
    return this
  };
  productPrefix__T() {
    return "Unix"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    throw new $c_jl_IndexOutOfBoundsException().init___T(("" + x$1))
  };
  label__T() {
    return this.label$1
  };
  toString__T() {
    return "Unix"
  };
  navigator__T() {
    return this.navigator$1
  };
  hashCode__I() {
    return 2641320
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1().init___s_Product(this)
  };
}
const $d_Lorg_scalalang_utils_OS$Unix$ = new $TypeData().initClass({
  Lorg_scalalang_utils_OS$Unix$: 0
}, false, "org.scalalang.utils.OS$Unix$", {
  Lorg_scalalang_utils_OS$Unix$: 1,
  O: 1,
  Lorg_scalalang_utils_OS: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalalang_utils_OS$Unix$.prototype.$classData = $d_Lorg_scalalang_utils_OS$Unix$;
let $n_Lorg_scalalang_utils_OS$Unix$ = (void 0);
const $m_Lorg_scalalang_utils_OS$Unix$ = (function() {
  if ((!$n_Lorg_scalalang_utils_OS$Unix$)) {
    $n_Lorg_scalalang_utils_OS$Unix$ = new $c_Lorg_scalalang_utils_OS$Unix$().init___()
  };
  return $n_Lorg_scalalang_utils_OS$Unix$
});
class $c_Lorg_scalalang_utils_OS$Windows$ extends $c_O {
  constructor() {
    super();
    this.navigator$1 = null;
    this.label$1 = null
  };
  init___() {
    this.navigator$1 = "Win";
    this.label$1 = "windows";
    return this
  };
  productPrefix__T() {
    return "Windows"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    throw new $c_jl_IndexOutOfBoundsException().init___T(("" + x$1))
  };
  label__T() {
    return this.label$1
  };
  toString__T() {
    return "Windows"
  };
  navigator__T() {
    return this.navigator$1
  };
  hashCode__I() {
    return (-1280820637)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1().init___s_Product(this)
  };
}
const $d_Lorg_scalalang_utils_OS$Windows$ = new $TypeData().initClass({
  Lorg_scalalang_utils_OS$Windows$: 0
}, false, "org.scalalang.utils.OS$Windows$", {
  Lorg_scalalang_utils_OS$Windows$: 1,
  O: 1,
  Lorg_scalalang_utils_OS: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalalang_utils_OS$Windows$.prototype.$classData = $d_Lorg_scalalang_utils_OS$Windows$;
let $n_Lorg_scalalang_utils_OS$Windows$ = (void 0);
const $m_Lorg_scalalang_utils_OS$Windows$ = (function() {
  if ((!$n_Lorg_scalalang_utils_OS$Windows$)) {
    $n_Lorg_scalalang_utils_OS$Windows$ = new $c_Lorg_scalalang_utils_OS$Windows$().init___()
  };
  return $n_Lorg_scalalang_utils_OS$Windows$
});
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  init___T(s) {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, s, null);
    return this
  };
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_s_None$ extends $c_s_Option {
  init___() {
    return this
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  get__O() {
    this.get__sr_Nothing$()
  };
  productElement__I__O(x$1) {
    throw new $c_jl_IndexOutOfBoundsException().init___T(("" + x$1))
  };
  toString__T() {
    return "None"
  };
  get__sr_Nothing$() {
    throw new $c_ju_NoSuchElementException().init___T("None.get")
  };
  hashCode__I() {
    return 2433880
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1().init___s_Product(this)
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
const $m_s_None$ = (function() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$().init___()
  };
  return $n_s_None$
});
class $c_s_Some extends $c_s_Option {
  constructor() {
    super();
    this.value$2 = null
  };
  productPrefix__T() {
    return "Some"
  };
  productArity__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.value$2;
        break
      }
      default: {
        throw new $c_jl_IndexOutOfBoundsException().init___T(("" + x$1))
      }
    }
  };
  get__O() {
    return this.value$2
  };
  toString__T() {
    return $m_sr_ScalaRunTime$().$$undtoString__s_Product__T(this)
  };
  init___O(value) {
    this.value$2 = value;
    return this
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1().init___s_Product(this)
  };
}
const $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
const $f_sc_TraversableLike__isPartLikelySynthetic$1__psc_TraversableLike__T__I__Z = (function($thiz, fqn$1, partStart$1) {
  const firstChar = (65535 & $uI(fqn$1.charCodeAt(partStart$1)));
  return (((firstChar > 90) && (firstChar < 127)) || (firstChar < 65))
});
const $f_sc_TraversableLike__toString__T = (function($thiz) {
  const start = ($thiz.stringPrefix__T() + "(");
  return $f_sc_TraversableOnce__mkString__T__T__T__T($thiz, start, ", ", ")")
});
const $f_sc_TraversableLike__stringPrefix__T = (function($thiz) {
  const this$1 = $thiz.repr__O();
  const fqn = $objectGetClass(this$1).getName__T();
  let pos = (((-1) + $uI(fqn.length)) | 0);
  while (true) {
    let jsx$1;
    if ((pos !== (-1))) {
      const index = pos;
      jsx$1 = ((65535 & $uI(fqn.charCodeAt(index))) === 36)
    } else {
      jsx$1 = false
    };
    if (jsx$1) {
      pos = (((-1) + pos) | 0)
    } else {
      break
    }
  };
  let jsx$2;
  if ((pos === (-1))) {
    jsx$2 = true
  } else {
    const index$1 = pos;
    jsx$2 = ((65535 & $uI(fqn.charCodeAt(index$1))) === 46)
  };
  if (jsx$2) {
    return ""
  };
  let result = "";
  while (true) {
    const partEnd = ((1 + pos) | 0);
    while (true) {
      let jsx$4;
      if ((pos !== (-1))) {
        const index$2 = pos;
        jsx$4 = ((65535 & $uI(fqn.charCodeAt(index$2))) <= 57)
      } else {
        jsx$4 = false
      };
      let jsx$3;
      if (jsx$4) {
        const index$3 = pos;
        jsx$3 = ((65535 & $uI(fqn.charCodeAt(index$3))) >= 48)
      } else {
        jsx$3 = false
      };
      if (jsx$3) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    const lastNonDigit = pos;
    while (true) {
      let jsx$6;
      if ((pos !== (-1))) {
        const index$4 = pos;
        jsx$6 = ((65535 & $uI(fqn.charCodeAt(index$4))) !== 36)
      } else {
        jsx$6 = false
      };
      let jsx$5;
      if (jsx$6) {
        const index$5 = pos;
        jsx$5 = ((65535 & $uI(fqn.charCodeAt(index$5))) !== 46)
      } else {
        jsx$5 = false
      };
      if (jsx$5) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    const partStart = ((1 + pos) | 0);
    if (((pos === lastNonDigit) && (partEnd !== $uI(fqn.length)))) {
      return result
    };
    while (true) {
      let jsx$7;
      if ((pos !== (-1))) {
        const index$6 = pos;
        jsx$7 = ((65535 & $uI(fqn.charCodeAt(index$6))) === 36)
      } else {
        jsx$7 = false
      };
      if (jsx$7) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    let atEnd;
    if ((pos === (-1))) {
      atEnd = true
    } else {
      const index$7 = pos;
      atEnd = ((65535 & $uI(fqn.charCodeAt(index$7))) === 46)
    };
    if ((atEnd || (!$f_sc_TraversableLike__isPartLikelySynthetic$1__psc_TraversableLike__T__I__Z($thiz, fqn, partStart)))) {
      const part = $as_T(fqn.substring(partStart, partEnd));
      const thiz = result;
      if ((thiz === null)) {
        throw new $c_jl_NullPointerException().init___()
      };
      if ((thiz === "")) {
        result = part
      } else {
        result = ((("" + part) + new $c_jl_Character().init___C(46)) + result)
      };
      if (atEnd) {
        return result
      }
    }
  }
});
class $c_sjsr_UndefinedBehaviorError extends $c_jl_Error {
  fillInStackTrace__jl_Throwable() {
    return $c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable.call(this)
  };
  init___jl_Throwable(cause) {
    $c_sjsr_UndefinedBehaviorError.prototype.init___T__jl_Throwable.call(this, ("An undefined behavior was detected" + ((cause === null) ? "" : (": " + cause.getMessage__T()))), cause);
    return this
  };
  init___T__jl_Throwable(message, cause) {
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, message, cause);
    return this
  };
}
const $d_sjsr_UndefinedBehaviorError = new $TypeData().initClass({
  sjsr_UndefinedBehaviorError: 0
}, false, "scala.scalajs.runtime.UndefinedBehaviorError", {
  sjsr_UndefinedBehaviorError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_ControlThrowable: 1,
  s_util_control_NoStackTrace: 1
});
$c_sjsr_UndefinedBehaviorError.prototype.$classData = $d_sjsr_UndefinedBehaviorError;
class $c_sc_IndexedSeqLike$Elements extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.end$2 = 0;
    this.index$2 = 0;
    this.$$outer$2 = null
  };
  next__O() {
    if ((this.index$2 >= this.end$2)) {
      $m_sc_Iterator$().empty$1.next__O()
    };
    const x = this.$$outer$2.apply__I__O(this.index$2);
    this.index$2 = ((1 + this.index$2) | 0);
    return x
  };
  init___sc_IndexedSeqLike__I__I($$outer, start, end) {
    this.end$2 = end;
    if (($$outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.$$outer$2 = $$outer
    };
    this.index$2 = start;
    return this
  };
  hasNext__Z() {
    return (this.index$2 < this.end$2)
  };
}
const $d_sc_IndexedSeqLike$Elements = new $TypeData().initClass({
  sc_IndexedSeqLike$Elements: 0
}, false, "scala.collection.IndexedSeqLike$Elements", {
  sc_IndexedSeqLike$Elements: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_BufferedIterator: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqLike$Elements.prototype.$classData = $d_sc_IndexedSeqLike$Elements;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor() {
    super();
    this.exception$4 = null
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  fillInStackTrace__jl_Throwable() {
    const e = this.exception$4;
    this.stackdata = e;
    return this
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.exception$4;
        break
      }
      default: {
        throw new $c_jl_IndexOutOfBoundsException().init___T(("" + x$1))
      }
    }
  };
  getMessage__T() {
    return $objectToString(this.exception$4)
  };
  init___O(exception) {
    this.exception$4 = exception;
    $c_jl_Throwable.prototype.init___T__jl_Throwable.call(this, null, null);
    return this
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__I(this, (-889275714))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1().init___s_Product(this)
  };
}
const $is_sjs_js_JavaScriptException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjs_js_JavaScriptException)))
});
const $as_sjs_js_JavaScriptException = (function(obj) {
  return (($is_sjs_js_JavaScriptException(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
});
const $isArrayOf_sjs_js_JavaScriptException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
});
const $asArrayOf_sjs_js_JavaScriptException = (function(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
});
const $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
class $c_sc_AbstractTraversable extends $c_O {
  repr__O() {
    return this
  };
  stringPrefix__T() {
    return $f_sc_TraversableLike__stringPrefix__T(this)
  };
}
const $f_sc_IndexedSeqOptimized__foreach__F1__V = (function($thiz, f) {
  let i = 0;
  const len = $thiz.length__I();
  while ((i < len)) {
    f.apply__O__O($thiz.apply__I__O(i));
    i = ((1 + i) | 0)
  }
});
class $c_sc_AbstractIterable extends $c_sc_AbstractTraversable {
}
const $is_sc_Seq = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
});
const $as_sc_Seq = (function(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
});
const $isArrayOf_sc_Seq = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
});
const $asArrayOf_sc_Seq = (function(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
});
const $is_sjs_js_ArrayOps = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjs_js_ArrayOps)))
});
const $as_sjs_js_ArrayOps = (function(obj) {
  return (($is_sjs_js_ArrayOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.ArrayOps"))
});
const $isArrayOf_sjs_js_ArrayOps = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_ArrayOps)))
});
const $asArrayOf_sjs_js_ArrayOps = (function(obj, depth) {
  return (($isArrayOf_sjs_js_ArrayOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.ArrayOps;", depth))
});
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  toString__T() {
    return $f_sc_TraversableLike__toString__T(this)
  };
}
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
const $is_sci_List = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_List)))
});
const $as_sci_List = (function(obj) {
  return (($is_sci_List(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
});
const $isArrayOf_sci_List = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
});
const $asArrayOf_sci_List = (function(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
});
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
}
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.underlying$5 = null
  };
  init___() {
    $c_scm_StringBuilder.prototype.init___I__T.call(this, 16, "");
    return this
  };
  apply__I__O(idx) {
    const c = this.underlying$5.charAt__I__C(idx);
    return new $c_jl_Character().init___C(c)
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    const c = this.underlying$5.charAt__I__C(index);
    return new $c_jl_Character().init___C(c)
  };
  toString__T() {
    return this.underlying$5.java$lang$StringBuilder$$content$f
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  append__T__scm_StringBuilder(s) {
    const this$1 = this.underlying$5;
    this$1.java$lang$StringBuilder$$content$f = (("" + this$1.java$lang$StringBuilder$$content$f) + s);
    return this
  };
  init___I__T(initCapacity, initValue) {
    const this$2 = new $c_jl_StringBuilder().init___I((($uI(initValue.length) + initCapacity) | 0));
    this$2.java$lang$StringBuilder$$content$f = (("" + this$2.java$lang$StringBuilder$$content$f) + initValue);
    $c_scm_StringBuilder.prototype.init___jl_StringBuilder.call(this, this$2);
    return this
  };
  length__I() {
    return this.underlying$5.length__I()
  };
  init___jl_StringBuilder(underlying) {
    this.underlying$5 = underlying;
    return this
  };
  append__O__scm_StringBuilder(x) {
    const this$2 = this.underlying$5;
    const str = ("" + x);
    this$2.java$lang$StringBuilder$$content$f = (this$2.java$lang$StringBuilder$$content$f + str);
    return this
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  jl_CharSequence: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.array$6 = null
  };
  apply__I__O(index) {
    return this.array$6[index]
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.array$6[index]
  };
  foreach__F1__V(f) {
    $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
  };
  length__I() {
    return $uI(this.array$6.length)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  init___sjs_js_Array(array) {
    this.array$6 = array;
    return this
  };
  stringPrefix__T() {
    return "WrappedArray"
  };
}
const $is_sjs_js_WrappedArray = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjs_js_WrappedArray)))
});
const $as_sjs_js_WrappedArray = (function(obj) {
  return (($is_sjs_js_WrappedArray(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
});
const $isArrayOf_sjs_js_WrappedArray = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
});
const $asArrayOf_sjs_js_WrappedArray = (function(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
});
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$m_Lorg_scalalang_FunctionsApp$().main__AT__V($makeNativeArrayWrapper($d_T.getArrayOf(), []));
}).call(this);
//# sourceMappingURL=scala-functions.js.map
